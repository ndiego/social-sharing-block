# Social Sharing Block

[![License](https://img.shields.io/badge/license-GPL--2.0%2B-blue.svg)](https://github.com/ndiego/social-share-block/blob/master/LICENSE.txt) ![WordPress Plugin Active Installs](https://img.shields.io/wordpress/plugin/installs/social-sharing-block?color=%23007cba&label=Active%20Installs&logo=wordpress&style=flat-square)

![Social Sharing](https://github.com/ndiego/social-sharing-block/blob/main/.wordpress-org/banner-1544x500.png)

A simple little WordPress block that allows you to add social share icons to your website. Choose from 15+ of the most popular social channels. [Download on WordPress.org](https://wordpress.org/plugins/social-sharing-block/)

### Sharing Options

- Facebook
- Flipboard
- LINE
- LinkedIn
- Pinterest
- Pocket
- Reddit
- Skype
- SMS
- Telegram
- Tumblr
- Viber
- WhatsApp
- X
- Email
- Print

### Key Features

- Heavily inspired by the Social Icons block in WordPress core
- Includes some handy controls (show/hide labels, size, colors, etc.)
- No block library required 🎉
- Built almost entirely with native WordPress components
- Will get additional functionality as it's added to WordPress core (margin, borders, responsive controls etc.)
- Plugin is intentionally light weight and adds no frontend JavaScript files.

## Requirements

- WordPress 6.2+
- PHP 7.0+

## Development

1. Run `npm install` to install the plugin's dependencies within a `/node_modules/` folder.
2. Run `composer install` to install the additional WordPress composer tools within a `/vendor/` folder.
3. Make sure you have Docker installed and run `npm run dev:start`. This will startup an integrated local development environment. See [@wordpress/env documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) for details.
4. Run `npm run start` to compile and watch source files for changes while developing.

Refer to `package.json` and `composer.json` for additional commands.
