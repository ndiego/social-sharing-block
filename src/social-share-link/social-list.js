/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import variations from './variations';
import { MailIcon } from './icons';

/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */
export const getIconBySite = ( name ) => {
	const variation = find( variations, { name } );
	return variation ? variation.icon : MailIcon;
};

/**
 * Retrieves the display name for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display name for social service
 */
export const getNameBySite = ( name ) => {
	const variation = find( variations, { name } );
	return variation
		? variation.title
		: __( 'Email this Page', 'the-social-share-block' );
};

/**
 * Retrieves the display label for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display label for social service
 */
export const getLabelBySite = ( name ) => {
	const variation = find( variations, { name } );

	if ( ! variation ) {
		return __( 'Mail', 'the-social-share-block' );
	}

	const title =
		variation?.title ?? __( 'Social Link', 'the-social-share-block' );
	const label =
		variation?.label ??
		/* translators: %s: title of the social service. */
		sprintf( __( 'Share on %s', 'the-social-share-block' ), title );
	return label;
};
