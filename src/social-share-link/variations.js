/**
 * Internal dependencies
 */
import {
	ChainIcon,
	FacebookIcon,
	LinkedInIcon,
	MailIcon,
	PinterestIcon,
	PrintIcon,
	RedditIcon,
	TwitterIcon,
} from './icons';

const variations = [
	{
		name: 'facebook',
		attributes: { service: 'facebook' },
		title: 'Facebook',
		icon: FacebookIcon,
	},
	{
		name: 'linkedin',
		attributes: { service: 'linkedin' },
		title: 'LinkedIn',
		icon: LinkedInIcon,
	},
	{
		name: 'mail',
		attributes: { service: 'mail' },
		title: 'Mail',
		keywords: [ 'email', 'e-mail' ],
		icon: MailIcon,
	},
	{
		name: 'pinterest',
		attributes: { service: 'pinterest' },
		title: 'Pinterest',
		icon: PinterestIcon,
	},
    {
        name: 'print',
        attributes: { service: 'print' },
        title: 'Print',
        icon: PrintIcon,
    },
    {
        name: 'reddit',
        attributes: { service: 'reddit' },
        title: 'Reddit',
        icon: RedditIcon,
    },
	{
        isDefault: true,
		name: 'twitter',
		attributes: { service: 'twitter' },
		title: 'Twitter',
		icon: TwitterIcon,
	}
];

/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach( ( variation ) => {
	if ( variation.isActive ) return;
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.service === variationAttributes.service;
} );

export default variations;