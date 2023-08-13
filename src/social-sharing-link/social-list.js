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
import { mail } from './icons';

/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */
export const getIconBySite = ( name ) => {
	// Transition Twitter to X
	if ( 'twitter' === name ) {
		return find( variations, { name: 'x' } ).icon;
	}

	const variation = find( variations, { name } );
	return variation ? variation.icon : mail;
};

/**
 * Retrieves the display label for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display label for social service
 */
export const getLabelBySite = ( name ) => {
	// Transition Twitter to X
	if ( 'twitter' === name ) {
		return __( 'X', 'social-sharing-block' );
	}

	const variation = find( variations, { name } );

	if ( ! variation ) {
		return __( 'Mail', 'social-sharing-block' );
	}

	const title =
		variation?.title ?? __( 'Social Link', 'social-sharing-block' );
	const label =
		variation?.label ??
		/* translators: %s: title of the social service. */
		sprintf( __( 'Share on %s', 'social-sharing-block' ), title );
	return label;
};
