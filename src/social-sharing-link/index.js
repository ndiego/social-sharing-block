/**
 * WordPress dependencies
 */
import { external as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import variations from './variations';

const { name } = metadata;
const settings = {
	icon,
	edit,
	variations,
};

/**
 * Register the Social Sharing Link block.
 */
registerBlockType( { name, ...metadata }, settings );
