/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as socialSharing from './blocks/social-sharing';
import * as socialSharingLink from './blocks/social-sharing-link';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;

	registerBlockType( { name, ...metadata }, settings );
};

/**
 * Function to register blocks.
 *
 * @param {Array} blocks Array of blocks being registered.
 */
const registerSocialSharingBlocks = (
	blocks = [ socialSharing, socialSharingLink ]
) => {
	blocks.forEach( registerBlock );
};

registerSocialSharingBlocks();
