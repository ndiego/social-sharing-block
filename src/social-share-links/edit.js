/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { getBlockSupport } from '@wordpress/blocks';
import { Fragment, useEffect } from '@wordpress/element';
import {
	BlockControls,
	useInnerBlocksProps,
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	PanelColorSettings,
	withColors,
} from '@wordpress/block-editor';
import {
	MenuGroup,
	MenuItem,
	PanelBody,
	ToggleControl,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { check } from '@wordpress/icons';

const ALLOWED_BLOCKS = [ 'outermost/social-share-link' ];

const sizeOptions = [
	{ name: __( 'Small' ), value: 'has-small-icon-size' },
	{ name: __( 'Normal' ), value: 'has-normal-icon-size' },
	{ name: __( 'Large' ), value: 'has-large-icon-size' },
	{ name: __( 'Huge' ), value: 'has-huge-icon-size' },
];

const getDefaultBlockLayout = ( blockTypeOrName ) => {
	const layoutBlockSupportConfig = getBlockSupport(
		blockTypeOrName,
		'__experimentalLayout'
	);
	return layoutBlockSupportConfig?.default;
};

export function SocialShareLinksEdit( props ) {
	const {
		name,
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
		iconColorValue,
		size,
		layout,
	} = attributes;
	const usedLayout = layout || getDefaultBlockLayout( name );

	// Remove icon background color if logos only style selected.
	const logosOnly =
		attributes.className?.indexOf( 'is-style-logos-only' ) >= 0;
	useEffect( () => {
		if ( logosOnly ) {
			setAttributes( {
				iconBackgroundColor: undefined,
				customIconBackgroundColor: undefined,
				iconBackgroundColorValue: undefined,
			} );
		}
	}, [ logosOnly, setAttributes ] );

	const SocialPlaceholder = (
		<li className="wp-block-outermost-social-share-links__social-placeholder">
			<div className="outermost-social-share-link"></div>
			<div className="wp-block-outermost-social-share-links__social-placeholder-icons">
				<div className="outermost-social-share-link outermost-social-share-link-twitter"></div>
				<div className="outermost-social-share-link outermost-social-share-link-facebook"></div>
				<div className="outermost-social-share-link outermost-social-share-link-linkedin"></div>
			</div>
		</li>
	);

	const SelectedSocialPlaceholder = (
		<li className="wp-block-outermost-social-share-links__social-prompt">
			{ __( 'Click plus to add' ) }
		</li>
	);

	// Fallback color values are used maintain selections in case switching
	// themes and named colors in palette do not match.
	const className = classNames( size, {
		'has-icon-color': iconColor.color || iconColorValue,
		'has-icon-background-color':
			iconBackgroundColor.color || iconBackgroundColorValue,
	} );

	const blockProps = useBlockProps( { className } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		placeholder: isSelected ? SelectedSocialPlaceholder : SocialPlaceholder,
		templateLock: false,
		__experimentalAppenderTagName: 'li',
		__experimentalLayout: usedLayout,
	} );

	const POPOVER_PROPS = {
		position: 'bottom right',
	};

	return (
		<Fragment>
			<BlockControls group="other">
				<ToolbarDropdownMenu
					label={ __( 'Size' ) }
					text={ __( 'Size' ) }
					icon={ null }
					popoverProps={ POPOVER_PROPS }
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
			<InspectorControls>
				<PanelColorSettings
					__experimentalHasMultipleOrigins
					__experimentalIsRenderedInSidebar
					title={ __( 'Color' ) }
					colorSettings={ [
						{
							// Use custom attribute as fallback to prevent loss of named color selection when
							// switching themes to a new theme that does not have a matching named color.
							value: iconColor.color || iconColorValue,
							onChange: ( colorValue ) => {
								setIconColor( colorValue );
								setAttributes( { iconColorValue: colorValue } );
							},
							label: __( 'Icon color' ),
						},
						! logosOnly && {
							// Use custom attribute as fallback to prevent loss of named color selection when
							// switching themes to a new theme that does not have a matching named color.
							value:
								iconBackgroundColor.color ||
								iconBackgroundColorValue,
							onChange: ( colorValue ) => {
								setIconBackgroundColor( colorValue );
								setAttributes( {
									iconBackgroundColorValue: colorValue,
								} );
							},
							label: __( 'Icon background' ),
						},
					] }
				/>
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
			<ul { ...innerBlocksProps } />
		</Fragment>
	);
}

const iconColorAttributes = {
	iconColor: 'icon-color',
	iconBackgroundColor: 'icon-background-color',
};

export default withColors( iconColorAttributes )( SocialShareLinksEdit );
