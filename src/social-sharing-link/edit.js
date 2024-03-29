/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
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
			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'social-sharing-block' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<TextControl
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
