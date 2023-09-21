/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { store as blocksStore } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { mail } from './icons';

/**
 * @typedef {Object} SocialService
 * @property {WPComponent} icon Icon component for social service
 * @property {string} label Display label for social service
 */

/**
 * Retrieves the social service's icon component
 * and a label based on the user defined label or the default label.
 *
 * @param {object} attributes Block attributes used to determine active variation.
 *
 * @return {SocialService} Social service data with icon and label.
 */
export const useSocialService = (attributes) => {
	// TODO: Map Twitter to X
	const activeBlockVariation = useSelect(
		(select) => {
			return select(blocksStore).getActiveBlockVariation(
				'outermost/social-sharing-link',
				attributes
			);
		},
		[attributes]
	);

	const title =
		activeBlockVariation?.title ??
		__('Social Link', 'social-sharing-block');

	return {
		// TODO: check if is not string
		icon:
			activeBlockVariation && activeBlockVariation.icon
				? activeBlockVariation.icon
				: mail,
		label:
			attributes.label ||
			(activeBlockVariation?.label ??
				/* translators: %s: title of the social service. */
				sprintf(__('Share on %s', 'social-sharing-block'), title)),
	};
};
