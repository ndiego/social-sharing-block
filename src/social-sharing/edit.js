/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { useEffect, useState, useRef } from '@wordpress/element';
import {
	BlockControls,
	useInnerBlocksProps,
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown, // eslint-disable-line
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients, // eslint-disable-line
	__experimentalLinkControl as LinkControl, // eslint-disable-line
} from '@wordpress/block-editor';
import {
	MenuGroup,
	MenuItem,
	PanelBody,
	Popover,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import { prependHTTP } from '@wordpress/url';
import { useMergeRefs } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { check, link, linkOff } from '@wordpress/icons';

/**
 * Import editor-only block styles.
 */
import './editor.scss';

const ALLOWED_BLOCKS = [ 'outermost/social-sharing-link' ];

const sizeOptions = [
	{
		name: __( 'Small', 'social-sharing-block' ),
		value: 'has-small-icon-size',
	},
	{
		name: __( 'Normal', 'social-sharing-block' ),
		value: 'has-normal-icon-size',
	},
	{
		name: __( 'Large', 'social-sharing-block' ),
		value: 'has-large-icon-size',
	},
	{ name: __( 'Huge', 'social-sharing-block' ), value: 'has-huge-icon-size' },
];

export function SocialSharingEdit( props ) {
	const {
		clientId,
		attributes,
		iconBackgroundColor,
		iconColor,
		isSelected,
		setAttributes,
		setIconBackgroundColor,
		setIconColor,
	} = props;

	const {
		iconBackgroundColorValue,
		customIconBackgroundColor,
		iconColorValue,
		layout,
		size,
		showLabels,
		shareCustomLink,
		url,
		linkTitle,
	} = attributes;

	const [ isEditingURL, setIsEditingURL ] = useState( false );

	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );

	// Remove icon background color if logos only style selected.
	const logosOnly = attributes.className?.includes( 'is-style-logos-only' );

	const blockRef = useRef();
	const backgroundBackupRef = useRef( {} );

	useEffect( () => {
		if ( logosOnly ) {
			backgroundBackupRef.current = {
				iconBackgroundColor,
				iconBackgroundColorValue,
				customIconBackgroundColor,
			};
			setAttributes( {
				iconBackgroundColor: undefined,
				customIconBackgroundColor: undefined,
				iconBackgroundColorValue: undefined,
			} );
		} else {
			setAttributes( { ...backgroundBackupRef.current } );
		}
	}, [ logosOnly ] );

	// Handle keboard shortcuts for adding a custom link.
	function onKeyDown( event ) {
		if ( isKeyboardEvent.primary( event, 'k' ) ) {
			startEditing( event );
		} else if ( isKeyboardEvent.primaryShift( event, 'k' ) ) {
			unlink();
		}
	}

	// Fallback color values are used maintain selections in case switching
	// themes and named colors in palette do not match.
	const className = classNames( size, {
		'has-icon-color': iconColor.color || iconColorValue,
		'has-icon-background-color':
			iconBackgroundColor.color || iconBackgroundColorValue,
	} );

	const SocialPlaceholder = (
		<li className="wp-block-outermost-social-sharing__social-placeholder">
			<div className="wp-block-outermost-social-sharing__social-placeholder-icons">
				<div className="outermost-social-sharing-link outermost-social-sharing-link-facebook"></div>
				<div className="outermost-social-sharing-link outermost-social-sharing-link-twitter"></div>
				<div className="outermost-social-sharing-link outermost-social-sharing-link-linkedin"></div>
			</div>
		</li>
	);

	const SelectedSocialPlaceholder = (
		<li className="wp-block-outermost-social-sharing__social-prompt">
			{ __( 'Click plus to add', 'social-sharing-block' ) }
		</li>
	);

	const blockProps = useBlockProps( {
		ref: useMergeRefs( [ setPopoverAnchor, blockRef ] ),
		onKeyDown,
		className,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? SelectedSocialPlaceholder : SocialPlaceholder,
		templateLock: false,
		orientation: layout?.orientation ?? 'horizontal',
		__experimentalAppenderTagName: 'li',
	} );

	const colorSettings = [
		{
			// Use custom attribute as fallback to prevent loss of named color selection when
			// switching themes to a new theme that does not have a matching named color.
			value: iconColor.color || iconColorValue,
			onChange: ( colorValue ) => {
				setIconColor( colorValue );
				setAttributes( { iconColorValue: colorValue } );
			},
			label: __( 'Icon color', 'social-sharing-block' ),
			resetAllFilter: () => {
				setIconColor( undefined );
				setAttributes( { iconColorValue: undefined } );
			},
		},
	];

	if ( ! logosOnly ) {
		colorSettings.push( {
			// Use custom attribute as fallback to prevent loss of named color selection when
			// switching themes to a new theme that does not have a matching named color.
			value: iconBackgroundColor.color || iconBackgroundColorValue,
			onChange: ( colorValue ) => {
				setIconBackgroundColor( colorValue );
				setAttributes( { iconBackgroundColorValue: colorValue } );
			},
			label: __( 'Icon background', 'social-sharing-block' ),
			resetAllFilter: () => {
				setIconBackgroundColor( undefined );
				setAttributes( { iconBackgroundColorValue: undefined } );
			},
		} );
	}

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	// In WordPress <=6.2 this will return null, so default to true in those cases.
	const hasColorsOrGradients =
		colorGradientSettings?.hasColorsOrGradients ?? true;

	const isURLSet = !! url;

	function startEditing( event ) {
		event.preventDefault();
		setIsEditingURL( true );
	}

	function unlink() {
		setAttributes( { url: undefined } );
		setIsEditingURL( false );
	}

	return (
		<>
			<BlockControls group="other">
				<ToolbarDropdownMenu
					label={ __( 'Size', 'social-sharing-block' ) }
					text={ __( 'Size', 'social-sharing-block' ) }
					icon={ null }
					popoverProps={ { position: 'bottom right' } }
				>
					{ ( { onClose } ) => (
						<MenuGroup>
							{ sizeOptions.map( ( entry ) => {
								return (
									<MenuItem
										icon={
											( size === entry.value ||
												( ! size &&
													entry.value ===
														'has-normal-icon-size' ) ) &&
											check
										}
										isSelected={ size === entry.value }
										key={ entry.value }
										onClick={ () => {
											setAttributes( {
												size: entry.value,
											} );
										} }
										onClose={ onClose }
										role="menuitemradio"
									>
										{ entry.name }
									</MenuItem>
								);
							} ) }
						</MenuGroup>
					) }
				</ToolbarDropdownMenu>
			</BlockControls>
			{ shareCustomLink && (
				<BlockControls group="inline">
					{ ! isURLSet && (
						<ToolbarButton
							name="link"
							icon={ link }
							title={ __( 'Link', 'social-sharing-block' ) }
							shortcut={ displayShortcut.primary( 'k' ) }
							onClick={ startEditing }
						/>
					) }
					{ isURLSet && (
						<ToolbarButton
							name="link"
							icon={ linkOff }
							title={ __( 'Unlink', 'social-sharing-block' ) }
							shortcut={ displayShortcut.primaryShift( 'k' ) }
							onClick={ unlink }
							isActive={ true }
						/>
					) }
				</BlockControls>
			) }
			{ isSelected && shareCustomLink && ( isEditingURL || isURLSet ) && (
				<Popover
					placement="bottom"
					onClose={ () => setIsEditingURL( false ) }
					anchor={ popoverAnchor }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
					__unstableSlotName={ '__unstable-block-tools-after' }
					shift
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={ { url } }
						onChange={ ( { url: newURL = '' } ) =>
							setAttributes( { url: prependHTTP( newURL ) } )
						}
						onRemove={ () => unlink() }
						forceIsEditingLink={ isEditingURL }
						settings={ [] }
					/>
				</Popover>
			) }
			<InspectorControls>
				<PanelBody
					title={ __( 'Share settings', 'social-sharing-block' ) }
				>
					<ToggleControl
						checked={ showLabels }
						label={ __( 'Show labels', 'social-sharing-block' ) }
						onChange={ () =>
							setAttributes( { showLabels: ! showLabels } )
						}
					/>
					<ToggleControl
						checked={ shareCustomLink }
						label={ __(
							'Share custom link',
							'social-sharing-block'
						) }
						onChange={ () =>
							setAttributes( {
								shareCustomLink: ! shareCustomLink,
							} )
						}
					/>
					{ shareCustomLink && (
						<TextControl
							label={ __( 'Link title', 'social-sharing-block' ) }
							value={ linkTitle }
							onChange={ ( title ) =>
								setAttributes( { linkTitle: title } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>
			{ hasColorsOrGradients && (
				<InspectorControls group="color">
					{ colorSettings.map(
						( { onChange, label, value, resetAllFilter } ) => (
							<ColorGradientSettingsDropdown
								key={ `social-sharing-color-${ label }` }
								__experimentalIsRenderedInSidebar
								settings={ [
									{
										colorValue: value,
										label,
										onColorChange: onChange,
										isShownByDefault: true,
										resetAllFilter,
										enableAlpha: true,
									},
								] }
								panelId={ clientId }
								{ ...colorGradientSettings }
							/>
						)
					) }
					{ ! logosOnly && (
						<ContrastChecker
							{ ...{
								textColor: iconColorValue,
								backgroundColor: iconBackgroundColorValue,
							} }
							isLargeText={ false }
						/>
					) }
				</InspectorControls>
			) }
			<ul { ...innerBlocksProps } />
		</>
	);
}

const iconColorAttributes = {
	iconBackgroundColor: 'icon-background-color',
	iconColor: 'icon-color',
};

export default withColors( iconColorAttributes )( SocialSharingEdit );
