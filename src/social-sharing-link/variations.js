/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	FacebookIcon,
	FlipboardIcon,
	LineIcon,
	LinkedInIcon,
	MailIcon,
	PinterestIcon,
	PocketIcon,
	PrintIcon,
	RedditIcon,
	SkypeIcon,
	SMSIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	WhatsAppIcon,
} from './icons';

const variations = [
	{
		name: 'facebook',
		attributes: { service: 'facebook' },
		title: 'Facebook',
		icon: FacebookIcon,
	},
	{
		name: 'flipboard',
		attributes: { service: 'flipboard' },
		title: 'Flipboard',
		icon: FlipboardIcon,
	},
	{
		name: 'line',
		attributes: { service: 'line' },
		title: 'LINE',
		icon: LineIcon,
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
		label: __( 'Email this Page', 'social-sharing-block' ),
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
		name: 'pocket',
		attributes: { service: 'pocket' },
		title: 'Pocket',
		icon: PocketIcon,
	},
	{
		name: 'print',
		attributes: { service: 'print' },
		title: 'Print',
		label: __( 'Print this Page', 'social-sharing-block' ),
		icon: PrintIcon,
	},
	{
		name: 'reddit',
		attributes: { service: 'reddit' },
		title: 'Reddit',
		icon: RedditIcon,
	},
	{
		name: 'skype',
		attributes: { service: 'skype' },
		title: 'Skype',
		icon: SkypeIcon,
	},
	{
		name: 'sms',
		attributes: { service: 'sms' },
		title: 'SMS',
		icon: SMSIcon,
	},
	{
		name: 'telegram',
		attributes: { service: 'telegram' },
		title: 'Telegram',
		icon: TelegramIcon,
	},
	{
		name: 'tumblr',
		attributes: { service: 'tumblr' },
		title: 'Tumblr',
		icon: TumblrIcon,
	},
	{
		isDefault: true,
		name: 'twitter',
		attributes: { service: 'twitter' },
		title: 'Twitter',
		icon: TwitterIcon,
	},
	{
		name: 'whatsapp',
		attributes: { service: 'whatsapp' },
		title: 'WhatsApp',
		icon: WhatsAppIcon,
	},
];

/**
 * Add `isActive` function to all `social link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 * Block by providing its attributes.
 */
variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}

	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.service === variationAttributes.service;
} );

export default variations;
