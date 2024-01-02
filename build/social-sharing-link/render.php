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
$label             = ( ! empty( $attributes['label'] ) ) ? $attributes['label'] : get_label( $service, $services );
$show_labels       = array_key_exists( 'showLabels', $block->context ) ? $block->context['showLabels'] : false;

// Transition Twitter to X.
if ( 'twitter' === $service ) {
	$service = 'x';
}

$rel_target_attributes = '';

if ( 'print' !== $service && 'mail' !== $service ) {
	$rel_target_attributes = 'rel="noopener nofollow" target="_blank"';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'outermost-social-sharing-link outermost-social-sharing-link-' . esc_attr( $service ) . get_color_classes( $block->context ),
		'style' => get_color_styles( $block->context ),
	)
);

?>
<li <?php echo $wrapper_attributes; ?>>
	<a href="<?php echo get_url( $service, $services ); ?>" aria-label="<?php echo esc_attr( $label ); ?>" <?php echo $rel_target_attributes; ?> class="wp-block-outermost-social-sharing-link-anchor">
		<?php echo get_icon( $service, $services ); ?>
		<span class="wp-block-outermost-social-sharing-link-label <?php echo ( $show_labels ? '' : 'screen-reader-text' ); ?>">
			<?php echo esc_html( $label ); ?>
		</span>
	</a>
</li>
