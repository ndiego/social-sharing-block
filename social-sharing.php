<?php
/**
 * Plugin Name:       Social Sharing Block
 * Description:       A simple little block that allows you add social share icons to your website.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nick Diego
 * Author URI:        https://www.nickdiego.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       social-sharing
 *
 * @package           Social Sharing
 */

/**
 * Registers the Social Sharing block using the metadata loaded from `block.json`.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function outermost_social_sharing_init() {
	register_block_type( __DIR__ . '/build/blocks/social-sharing' );

	// Load available translations.
	wp_set_script_translations( 'outermost-social-sharing-scripts', 'social-sharing' );
}
add_action( 'init', 'outermost_social_sharing_init' );

/**
 * Enqueue plugin specific editor scripts.
 *
 * @since 0.1.0
 */
function outermost_social_sharing_enqueue_editor_assets() {
	$asset_file = require_once dirname( __FILE__ ) . '/build/index.asset.php';

	wp_enqueue_script(
		'outermost-social-sharing-scripts',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version'],
		false
	);
}
add_action( 'enqueue_block_editor_assets', 'outermost_social_sharing_enqueue_editor_assets' );

// The Social Share Links block is rendered server-side.
require_once dirname( __FILE__ ) . '/build/blocks/social-sharing-link.php';
