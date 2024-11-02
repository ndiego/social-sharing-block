/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InspectorControls,
	useBlockEditingMode,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Dropdown,
	PanelBody,
	PanelRow,
	TextControl,
	ToolbarButton,
} from '@wordpress/components';
import { store as blocksStore } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';

/**
 * Import editor-only block styles.
 */
import './editor.scss';

/**
 * Internal dependencies
 */
import { getSocialService } from './social-services';

const SocialSharingLinkEdit = ( { attributes, context, setAttributes } ) => {
	const { service, label } = attributes;
	const {
		showLabels,
		iconColor,
		iconColorValue,
		iconBackgroundColor,
		iconBackgroundColorValue,
	} = context;
	const isContentOnlyMode = useBlockEditingMode() === 'contentOnly';

	const activeVariation = useSelect(
		( select ) => {
			return select( blocksStore ).getActiveBlockVariation(
				'outermost/social-sharing-link',
				attributes
			);
		},
		[ attributes ]
	);

	const classes = classnames(
		'outermost-social-sharing-link',
		'outermost-social-sharing-link-' + service,
		{
			[ `has-${ iconColor }-color` ]: iconColor,
			[ `has-${ iconBackgroundColor }-background-color` ]:
				iconBackgroundColor,
		}
	);

	const { icon, label: socialLinkLabel } = getSocialService(
		service,
		activeVariation
	);

	const blockProps = useBlockProps( {
		className: classes,
		style: {
			color: iconColorValue,
			backgroundColor: iconBackgroundColorValue,
		},
	} );

	return (
		<>
			{ isContentOnlyMode && showLabels && (
				// Add an extra control to modify the label attribute when content only mode is active.
				// With content only mode active, the inspector is hidden, so users need another way
				// to edit this attribute.
				<BlockControls group="other">
					<Dropdown
						popoverProps={ { position: 'bottom right' } }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								onClick={ onToggle }
								aria-haspopup="true"
								aria-expanded={ isOpen }
							>
								{ __( 'Label', 'social-sharing-block' ) }
							</ToolbarButton>
						) }
						renderContent={ () => (
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								className="wp-block-social-sharing-link__toolbar_content_text"
								label={ __( 'Label', 'social-sharing-block' ) }
								help={ __(
									'Customize the share label or use the default.',
									'social-sharing-block'
								) }
								value={ label }
								onChange={ ( value ) =>
									setAttributes( { label: value } )
								}
							/>
						) }
					/>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'social-sharing-block' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={ __(
								'Share label',
								'social-sharing-block'
							) }
							help={ __(
								'Briefly describe the share link to help screen reader users.',
								'social-sharing-block'
							) }
							value={ label }
							onChange={ ( value ) =>
								setAttributes( { label: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<li { ...blockProps }>
				<Button className="wp-block-outermost-social-sharing-link-anchor">
					{ icon }
					<span
						className={ classnames(
							'wp-block-outermost-social-sharing-link-label',
							{
								'screen-reader-text': ! showLabels,
							}
						) }
					>
						{ label || socialLinkLabel }
					</span>
				</Button>
			</li>
		</>
	);
};

export default SocialSharingLinkEdit;
