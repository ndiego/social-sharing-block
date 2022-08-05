/**
 * WordPress dependencies
 */
import { external as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	example: {
		innerBlocks: [
			{
				name: 'outermost/social-sharing-link',
				attributes: { service: 'facebook' },
			},
			{
				name: 'outermost/social-sharing-link',
				attributes: { service: 'twitter' },
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
