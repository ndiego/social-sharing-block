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

const SocialShareLinkEdit = ( { attributes, context, setAttributes } ) => {
	const { service, label } = attributes;
	const { showLabels, iconColorValue, iconBackgroundColorValue } = context;
	const classes = classNames(
		'outermost-social-share-link',
		'outermost-social-share-link-' + service
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
						__( '%s settings', 'the-social-share-block' ),
						socialLinkName
					) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ __(
								'Share label',
								'the-social-share-block'
							) }
							help={ __(
								'Briefly describe the share link to help screen reader users.',
								'the-social-share-block'
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

export default SocialShareLinkEdit;
