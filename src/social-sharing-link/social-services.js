/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { mail, x } from './icons';

/**
 * Retrieves the social service's icon component and label.
 *
 * @param {string} name            The key for a social service (lowercase slug)
 * @param {Object} activeVariation The object of the active social service variation
 *
 * @return {Object} An opject containing the Icon component for social service and label.
 */
export const getSocialService = ( name, activeVariation ) => {
	// Transition Twitter to X
	if ( 'twitter' === name ) {
		return {
			icon: x,
			label: __( 'Share on X', 'social-sharing-block' ),
		};
	}

	if ( activeVariation?.name ) {
		return {
			icon: activeVariation?.icon ?? mail,
			label: getSocialServiceLabel( activeVariation ),
		};
	}

	// Default to Mail if no active variation is found.
	return {
		icon: mail,
		label: __( 'Email this Page', 'social-sharing-block' ),
	};
};

/**
 * Retrieves the display label for the social service.
 *
 * @param {Object} activeVariation The object of the active social service variation
 *
 * @return {string} Display label for social service
 */
const getSocialServiceLabel = ( activeVariation ) => {
	let title = activeVariation?.title ?? activeVariation.name;

	// Transition Twitter to X
	if ( 'twitter' === activeVariation?.name ) {
		title = __( 'X', 'social-sharing-block' );
	}

	const label =
		activeVariation?.label ??
		/* translators: %s: title of the social service. */
		sprintf( __( 'Share on %s', 'social-sharing-block' ), title );
	return label;
};
