=== Social Sharing Block ===
Contributors:      ndiego, outermostdesign
Tags:              social, share, social icon, social share, block
Requires at least: 5.9
Tested up to:      5.9
Requires PHP:      7.0
Stable tag:        0.5.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Effortlessly add social share icons to your website.

== Description ==

A simple little block that allows you to add social share icons to the Block Editor. Choose from 15+ of the most popular social channels.

Share options include:

* Facebook
* Flipboard (New)
* LINE (New)
* LinkedIn
* Pinterest
* Pocket
* Reddit
* Skype
* SMS (New)
* Telegram
* Tumblr
* Twitter
* WhatsApp
* Email
* Print

=== Key Features ===

* Heavily inspired by the Social Icons block in WordPress core
* Includes some handy controls (show/hide labels, size, colors, etc.)
* No block library required 🎉
* Built almost entirely with native WordPress components
* Will get additional functionality as it's added to WordPress core (margin, borders, responsive controls etc.)
* Plugin is intentionally light weight and adds no frontend JavaScript files.

=== Stay Connected ===

* [Follow on Twitter](https://twitter.com/nickmdiego)
* [View on GitHub](https://github.com/ndiego/social-sharing-block)

== Installation ==

1. You have a couple options:
	* Go to Plugins &rarr; Add New and search for "Social Sharing Block". Once found, click "Install".
	* Download the Social Sharing Block plugin from wordpress.org and make sure the folder us zipped. Then upload via Plugins &rarr; Add New &rarr; Upload.
    * Open the block inserter within the Block Editor (Gutenberg) and search for "icon". The plugin should appear and allow you to it install directly. Skip steps 2 and 3.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Search for the block within the Block Editor (Gutenberg) and begin using.

== Screenshots ==

1. Social icons default to their appropriate brand colors. Easily choose your own icon and background colors using the block controls.
2. The Social Sharing Block include three different styles and the ability to show/hide labels.
3. Effortlessly configure social icons to suite your needs with extensive layout, orientation, and size controls.

== Changelog ==

= 0.5.0 - 2022-08-05 =

**Changed**

* Update incorrect and/or outdated social icon brand colors.
* Update minimum required WordPress version to 5.9.

= 0.4.0 - 2022-02-12 =

**Added**

* Add support for Flipboard sharing.
* Add support for LINE sharing.
* Add support for SMS sharing.

**Changed**

* Update label markup to improve accessibility.

= 0.3.0 - 2022-01-22 =

**Changed**

* Improve support for Full Site Editing by unsetting background colors. Stops color bleed from Global Styles. GitHub reference: [#37940](https://github.com/WordPress/gutenberg/pull/37940)
* Update setting labels.

**Fixed**

* Fix missing `editorScript` specification in block.json files.
* Fix missing 'to' in plugin description. 🤦‍♂️
* Fix typo in variable name.

= 0.2.0 - 2022-01-17 =

**Added**

* Add screenshots.

**Changed**

* Update plugin name and text-domain to `social-sharing-block` to comply with wordpress.org requirements.

= 0.1.0 - 2022-01-16 =

* Initial release 🎉
