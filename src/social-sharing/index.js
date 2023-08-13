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
import save from './save';

/**
 * Import block styles.
 */
import './style.scss';

const { name } = metadata;
const settings = {
	example: {
		innerBlocks: [
			{
				name: 'outermost/social-sharing-link',
				attributes: { service: 'facebook' },
			},
			{
				name: 'outermost/social-sharing-link',
				attributes: { service: 'x' },
			},
			{
				name: 'outermost/social-sharing-link',
				attributes: { service: 'linkedin' },
			},
		],
	},
	icon,
	edit,
	save,
};

/**
 * Register the Social Sharing Block.
 */
registerBlockType( { name, ...metadata }, settings );
