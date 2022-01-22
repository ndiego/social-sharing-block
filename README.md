# Social Sharing Block

[![License](https://img.shields.io/badge/license-GPL--2.0%2B-blue.svg)](https://github.com/ndiego/social-share-block/blob/master/LICENSE.txt)

![Social Sharing](https://github.com/ndiego/social-sharing-block/blob/main/.wordpress-org/banner-1544x500.png)

**This plugin requires WordPress 5.9+ or 5.8+ with [Gutenberg](https://wordpress.org/plugins/gutenberg/) active.**

A simple little block that allows you to add social share icons to the Block Editor. Choose from 10+ of the most popular social channels.

### Sharing Options

- Facebook
- LinkedIn
- Pinterest
- Pocket
- Reddit
- Skype
- Telegram
- Tumblr
- Twitter
- WhatsApp
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

- WordPress 5.9+ or 5.8+ with [Gutenberg](https://wordpress.org/plugins/gutenberg/) active
- PHP 7.0+

## Development

1. Set up a local WordPress development environment.
2. Clone / download this repository into the `wp-content/plugins` folder.
3. Navigate to the `wp-content/plugins/social-sharing-block` folder in the command line.
4. Run `npm install` to install the plugin's dependencies within a `/node_modules/` folder.
5. Run `composer install` to install the additional WordPress composer tools within a `/vendor/` folder.
6. Run `npm run start` to compile and watch source files for changes while developing.

Refer to `package.json` and `composer.json` for additional commands.
