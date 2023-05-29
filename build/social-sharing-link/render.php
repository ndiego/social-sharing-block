<?php
/**
 * Server-side rendering of the `outermost/social-sharing-link` block.
 *
 * @package Social Sharing Block
 */

namespace SocialSharingLink;

defined( 'ABSPATH' ) || exit;

// Include utility functions.
require_once dirname( __FILE__ ) . '/utils.php';

$share_custom_link = array_key_exists( 'shareCustomLink', $block->context ) ? $block->context['shareCustomLink'] : false;
$service           = ( isset( $attributes['service'] ) ) ? $attributes['service'] : 'mail';
$services          = get_link_services( $share_custom_link, $block );
$url               = get_url( $service, $services );
$label             = ( isset( $attributes['label'] ) ) ? $attributes['label'] : outermost_social_sharing_link_get_label( $service, $services );
$show_labels       = array_key_exists( 'showLabels', $block->context ) ? $block->context['showLabels'] : false;
$class_name        = isset( $attributes['className'] ) ? ' ' . $attributes['className'] : false;

$rel_target_attributes = '';

if ( 'print' !== $service && 'mail' !== $service ) {
	$rel_target_attributes = 'rel="noopener nofollow" target="_blank"';
}

$icon               = get_icon( $service, $services );
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'outermost-social-sharing-link outermost-social-sharing-link-' . $service . $class_name . get_color_classes( $block->context ),
		'style' => get_color_styles( $block->context ),
	)
);

$share_link  = '<li ' . $wrapper_attributes . '>';
$share_link .= '<a href="' . $url . '" aria-label="' . esc_attr( $label ) . '" ' . $rel_target_attributes . ' class="wp-block-outermost-social-sharing-link-anchor">';
$share_link .= $icon;
$share_link .= '<span class="wp-block-outermost-social-sharing-link-label' . ( $show_labels ? '' : ' screen-reader-text' ) . '">';
$share_link .= esc_html( $label );
$share_link .= '</span></a></li>';

echo esc_html( $share_link );
