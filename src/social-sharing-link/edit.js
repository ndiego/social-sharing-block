/**
 * External dependencies
 */
import classNames from 'classnames';

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
	const { showLabels, iconColorValue, iconBackgroundColorValue } = context;
	const classes = classNames(
		'outermost-social-sharing-link',
		'outermost-social-sharing-link-' + service
	);

	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );
	const socialLikeLabel = label ? label : getLabelBySite( service );
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
							label={ __( 'Share label', 'social-sharing-block' ) }
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
				<Button>
					<IconComponent />
					{ showLabels && <span>{ socialLikeLabel }</span> }
				</Button>
			</li>
		</>
	);
};

export default SocialSharingLinkEdit;
