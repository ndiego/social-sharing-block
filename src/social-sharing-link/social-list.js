/**
 * External dependencies
 */
import { find } from 'lodash';

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
 * Retrieves the social service's icon component.
 *
 * @param {object} attributes Block attributes used to determine active variation.
 *
 * @return {WPComponent} Icon component for social service.
 */
export const useVariationIcon = (attributes) => {
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
	// Default to mail icon
	// TODO: check if is not string
	return activeBlockVariation && activeBlockVariation.icon
		? activeBlockVariation.icon
		: mail;
};

/**
 * Retrieves the display label for the social service.
 *
 * @param {object} attributes Block attributes used to determine active variation.
 *
 * @return {string} Display label for social service
 */
export const useVariationLabel = (attributes) => {
	// TODO: Map Twitter to X
	// Have to call hook before if, because of react hook rules.
	const activeBlockVariation = useSelect(
		(select) => {
			return select(blocksStore).getActiveBlockVariation(
				'outermost/social-sharing-link',
				attributes
			);
		},
		[attributes]
	);
	if (attributes.label) {
		return attributes.label;
	}

	const title =
		activeBlockVariation?.title ??
		__('Social Link', 'social-sharing-block');
	const label =
		activeBlockVariation?.label ??
		/* translators: %s: title of the social service. */
		sprintf(__('Share on %s', 'social-sharing-block'), title);

	return label;
};
