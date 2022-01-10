<?php
/**
 * Plugin Name:       The Social Share Block
 * Description:       TBD
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Nick Diego
 * Author URI:        https://www.nickdiego.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       the-social-share-block
 *
 * @package           outermost-the-social-share-block
 */

/**
 * Registers The Social Share Block using the metadata loaded from `block.json`.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function create_outermost_the_social_share_block_init() {

	register_block_type( __DIR__ . '/src/social-share-links' );

	// Load available translations.
	// wp_set_script_translations( 'outermost-the_social_share-block-editor-script-js', 'the-social-share-block' );
}
add_action( 'init', 'create_outermost_the_social_share_block_init' );

/**
 * Enqueue plugin specific editor scripts
 *
 * @since 0.1.0
 */
function ssb_enqueue_editor_assets() {

	// Scripts.
	$asset_file = include dirname( __FILE__ ) . '/build/index.asset.php';

	wp_enqueue_script(
		'outermost-social-share-block-scripts',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'enqueue_block_editor_assets', 'ssb_enqueue_editor_assets' );

include dirname( __FILE__ ) . '/src/social-share-link/index.php';
