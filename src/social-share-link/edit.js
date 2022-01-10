/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	URLPopover,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import { Fragment, useState, useRef } from '@wordpress/element';
import {
	Button,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { keyboardReturn } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { getIconBySite, getNameBySite } from './social-list';

const SocialShareLinkEdit = ( {
	attributes,
	context,
	isSelected,
	setAttributes,
} ) => {
	const { service, label } = attributes;
	const { iconColorValue, iconBackgroundColorValue } = context;
	const classes = classNames( 'outermost-social-share-link', 'outermost-social-share-link-' + service );

	const ref = useRef();
	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );
	const blockProps = useBlockProps( {
		className: classes,
		style: {
			color: iconColorValue,
			backgroundColor: iconBackgroundColorValue,
		},
	} );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ sprintf(
						/* translators: %s: name of the social service. */
						__( '%s share label' ),
						socialLinkName
					) }
					initialOpen={ false }
				>
					<PanelRow>
						<TextControl
							label={ __( 'Share label' ) }
							help={ __(
								'Briefly describe the share link to help screen reader users.'
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
                </Button>
			</li>
		</Fragment>
	);
};

export default SocialShareLinkEdit;
