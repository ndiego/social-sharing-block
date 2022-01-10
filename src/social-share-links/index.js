/**
 * WordPress dependencies
 */
import { share as icon } from '@wordpress/icons';

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
				name: 'outermost/social-share-link',
				attributes: {
					service: 'facebook',
					url: 'https://www.facebook.com/WordPress/',
				},
			},
			{
				name: 'outermost/social-share-link',
				attributes: {
					service: 'twitter',
					url: 'https://twitter.com/WordPress',
				},
			},
            {
                name: 'outermost/social-share-link',
                attributes: {
                    service: 'linkedin',
                    url: 'https://linkedin.com/WordPress',
                },
            },
		],
	},
	icon,
	edit,
	save,
};