/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getIconBySite, getNameBySite, getLabelBySite } from './social-list';

const SocialSharingLinkEdit = ( { attributes, context, setAttributes } ) => {
	const { service, label } = attributes;
	const {
		showLabels,
		iconColor,
		iconColorValue,
		iconBackgroundColor,
		iconBackgroundColorValue,
	} = context;

	const classes = classnames(
		'outermost-social-sharing-link',
		'outermost-social-sharing-link-' + service, {
			[ `has-${ iconColor }-color` ]: iconColor,
			[ `has-${ iconBackgroundColor }-background-color` ]:
			iconBackgroundColor,
		}
	);

	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );
	const socialLinkLabel = label ? label : getLabelBySite( service );
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
					title={ sprintf(
						/* translators: %s: name of the social service. */
						__( '%s settings', 'social-sharing-block' ),
						socialLinkName
					) }
					initialOpen={ false }
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
					<IconComponent />
					<span
						className={ classnames(
							'wp-block-outermost-social-sharing-link-label',
							{
								'screen-reader-text': ! showLabels,
							}
						) }
					>
						{ socialLinkLabel }
					</span>
				</Button>
			</li>
		</>
	);
};

export default SocialSharingLinkEdit;
