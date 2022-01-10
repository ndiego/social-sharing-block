/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as socialShareLink from './social-share-link';
import * as socialShareLinks from './social-share-links';

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
const registerSocialShareBlocks = (
	blocks = [ socialShareLink, socialShareLinks ]
) => {
	blocks.forEach( registerBlock );
};

registerSocialShareBlocks();