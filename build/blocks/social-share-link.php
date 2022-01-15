<?php
/**
 * Server-side rendering of the `outermost/social-share-link` block.
 *
 * @package The Social Share Block
 */

/**
 * Renders the `outermost/social-share-link` block on server.
 *
 * @param Array    $attributes The block attributes.
 * @param String   $content    InnerBlocks content of the Block.
 * @param WP_Block $block      Block object.
 *
 * @return string Rendered HTML of the referenced block.
 */
function render_block_outermost_social_share_link( $attributes, $content, $block ) { // phpcs:ignore
	$service     = ( isset( $attributes['service'] ) ) ? $attributes['service'] : 'mail';
	$url         = block_outermost_social_share_link_get_url( $service );
	$label       = ( isset( $attributes['label'] ) ) ? $attributes['label'] : block_outermost_social_share_link_get_label( $service );
	$show_labels = array_key_exists( 'showLabels', $block->context ) ? $block->context['showLabels'] : false;
	$class_name  = isset( $attributes['className'] ) ? ' ' . $attributes['className'] : false;

	$rel_target_attributes = '';

	if ( 'print' !== $service && 'mail' !== $service ) {
		$rel_target_attributes = 'rel="noopener nofollow" target="_blank"';
	}

	$icon               = block_outermost_social_share_link_get_icon( $service );
	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => 'outermost-social-share-link outermost-social-share-link-' . $service . $class_name,
			'style' => block_outermost_social_share_link_get_color_styles( $block->context ),
		)
	);

	$link  = '<li ' . $wrapper_attributes . '>';
	$link .= '<a href="' . $url . '" aria-label="' . esc_attr( $label ) . '" title="' . esc_attr( $label ) . '" ' . $rel_target_attributes . ' class="wp-block-outermost-social-share-link-anchor">';
	$link .= $icon;

	if ( $show_labels ) {
		$link .= '<span class="wp-block-outermost-social-share-link-label">' . esc_attr( $label ) . '</span>';
	}

	$link .= '</a></li>';

	return $link;
}

/**
 * Registers the `outermost/social-share-link` block on the server.
 */
function register_block_outermost_social_share_link() {
	register_block_type_from_metadata(
		__DIR__ . '/social-share-link',
		array(
			'render_callback' => 'render_block_outermost_social_share_link',
		)
	);
}
add_action( 'init', 'register_block_outermost_social_share_link' );


/**
 * Returns the SVG for social link.
 *
 * @param string $service The service icon.
 *
 * @return string SVG Element for service icon.
 */
function block_outermost_social_share_link_get_icon( $service ) {
	$services = block_outermost_social_share_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['icon'] ) ) {
		return $services[ $service ]['icon'];
	}

	return $services['mail']['icon'];
}

/**
 * Returns the brand name for social share link.
 *
 * @param string $service The service icon.
 *
 * @return string Brand label.
 */
function block_outermost_social_share_link_get_label( $service ) {
	$services = block_outermost_social_share_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['label'] ) ) {
		return $services[ $service ]['label'];
	}

	return $services['mail']['label'];
}

/**
 * Returns the brand name for social share link.
 *
 * @param string $service The service icon.
 *
 * @return string Brand label.
 */
function block_outermost_social_share_link_get_url( $service ) {
	$services = block_outermost_social_share_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['url'] ) ) {
		// The print service uses Javascript and should be escaped differently.
		return 'print' === $service ? esc_js( $services[ $service ]['url'] ) : esc_url( $services[ $service ]['url'] );
	}

	return $services['mail']['url'];
}

/**
 * Returns the SVG for social share link.
 *
 * @param string $service The service slug to extract data from.
 * @param string $field The field ('name', 'icon', etc) to extract for a service.
 *
 * @return array|string
 */
function block_outermost_social_share_link_services( $service = '', $field = '' ) {
	global $post;

	if ( has_post_thumbnail() ) {
		$thumbnail_id = get_post_thumbnail_id( $post->ID );
		$thumbnail    = $thumbnail_id ? current( wp_get_attachment_image_src( $thumbnail_id, 'large', true ) ) : '';
	} else {
		$thumbnail = null;
	}

	$services_data = array(
		'facebook'  => array(
			'label' => __( 'Share on Facebook', 'the-social-share-block' ),
			'url'   => 'https://www.facebook.com/sharer/sharer.php?u=' . get_the_permalink() . '&title=' . get_the_title() . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg>',
		),
		'linkedin'  => array(
			'label' => __( 'Share on LinkedIn', 'the-social-share-block' ),
			'url'   => 'https://www.linkedin.com/shareArticle?mini=true&url=' . get_the_permalink() . '&title=' . get_the_title() . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg>',
		),
		'mail'      => array(
			'label' => __( 'Email this Page', 'the-social-share-block' ),
			'url'   => 'mailto:?subject=' . get_the_title() . '&body=' . get_the_title() . '&mdash;' . get_the_permalink() . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"></path></svg>',
		),
		'pinterest' => array(
			'label' => __( 'Share on Pinterest', 'the-social-share-block' ),
			'url'   => 'https://pinterest.com/pin/create/button/?&url=' . get_the_permalink() . '&description=' . get_the_title() . '&media=' . esc_url( $thumbnail ) . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"></path></svg>',
		),
		'print'     => array(
			'label' => __( 'Print this Page', 'the-social-share-block' ),
			'url'   => 'javascript:window.print()',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M14.6388889,3 L18.8611111,7.23529412 L18.8611111,10.4117647 L19.3888889,10.4117647 C20.5018263,10.4117647 21.4136187,11.2756353 21.4942095,12.3713693 L21.5,12.5294118 L21.5,17.8235294 L18.8611111,17.8235294 L18.8611111,19.9411765 C18.8611111,20.5259486 18.3885228,21 17.8055556,21 L6.19444444,21 C5.61147721,21 5.13888889,20.5259486 5.13888889,19.9411765 L5.13888889,17.8235294 L2.5,17.8235294 L2.5,12.5294118 C2.5,11.3598676 3.44517664,10.4117647 4.61111111,10.4117647 L5.13888889,10.4117647 L5.13888889,4.05882353 C5.13888889,3.47405144 5.61147721,3 6.19444444,3 L14.6388889,3 Z M17.2777778,16.2352941 L6.72222222,16.2352941 L6.72222222,19.4117647 L17.2777778,19.4117647 L17.2777778,16.2352941 Z M19.3888889,11.7352941 C18.9516635,11.7352941 18.5972222,12.0908327 18.5972222,12.5294118 C18.5972222,12.9679908 18.9516635,13.3235294 19.3888889,13.3235294 C19.8261143,13.3235294 20.1805556,12.9679908 20.1805556,12.5294118 C20.1805556,12.0908327 19.8261143,11.7352941 19.3888889,11.7352941 Z M14.1111111,4.58823529 L6.72222222,4.58823529 L6.72222222,11.4705882 L17.2777778,11.4705882 L17.2777778,7.76470588 L15.1666667,7.76470588 C14.5836994,7.76470588 14.1111111,7.29065444 14.1111111,6.70588235 L14.1111111,4.58823529 Z"></path></svg>',
		),
		'reddit'    => array(
			'label' => __( 'Share on Reddit', 'the-social-share-block' ),
			'url'   => 'https://www.reddit.com/submit?url=' . get_the_permalink() . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M22,11.816c0-1.256-1.021-2.277-2.277-2.277c-0.593,0-1.122,0.24-1.526,0.614c-1.481-0.965-3.455-1.594-5.647-1.69 l1.171-3.702l3.18,0.748c0.008,1.028,0.846,1.862,1.876,1.862c1.035,0,1.877-0.842,1.877-1.878c0-1.035-0.842-1.877-1.877-1.877 c-0.769,0-1.431,0.466-1.72,1.13l-3.508-0.826c-0.203-0.047-0.399,0.067-0.46,0.261l-1.35,4.268 c-2.316,0.038-4.411,0.67-5.97,1.671C5.368,9.765,4.853,9.539,4.277,9.539C3.021,9.539,2,10.56,2,11.816 c0,0.814,0.433,1.523,1.078,1.925c-0.037,0.221-0.061,0.444-0.061,0.672c0,3.292,4.011,5.97,8.941,5.97s8.941-2.678,8.941-5.97 c0-0.214-0.02-0.424-0.053-0.632C21.533,13.39,22,12.661,22,11.816z M18.776,4.394c0.606,0,1.1,0.493,1.1,1.1s-0.493,1.1-1.1,1.1 s-1.1-0.494-1.1-1.1S18.169,4.394,18.776,4.394z M2.777,11.816c0-0.827,0.672-1.5,1.499-1.5c0.313,0,0.598,0.103,0.838,0.269 c-0.851,0.676-1.477,1.479-1.812,2.36C2.983,12.672,2.777,12.27,2.777,11.816z M11.959,19.606c-4.501,0-8.164-2.329-8.164-5.193 S7.457,9.22,11.959,9.22s8.164,2.329,8.164,5.193S16.46,19.606,11.959,19.606z M20.636,13.001c-0.326-0.89-0.948-1.701-1.797-2.384 c0.248-0.186,0.55-0.301,0.883-0.301c0.827,0,1.5,0.673,1.5,1.5C21.223,12.299,20.992,12.727,20.636,13.001z M8.996,14.704 c-0.76,0-1.397-0.616-1.397-1.376c0-0.76,0.637-1.397,1.397-1.397c0.76,0,1.376,0.637,1.376,1.397 C10.372,14.088,9.756,14.704,8.996,14.704z M16.401,13.328c0,0.76-0.616,1.376-1.376,1.376c-0.76,0-1.399-0.616-1.399-1.376 c0-0.76,0.639-1.397,1.399-1.397C15.785,11.931,16.401,12.568,16.401,13.328z M15.229,16.708c0.152,0.152,0.152,0.398,0,0.55 c-0.674,0.674-1.727,1.002-3.219,1.002c-0.004,0-0.007-0.002-0.011-0.002c-0.004,0-0.007,0.002-0.011,0.002 c-1.492,0-2.544-0.328-3.218-1.002c-0.152-0.152-0.152-0.398,0-0.55c0.152-0.152,0.399-0.151,0.55,0 c0.521,0.521,1.394,0.775,2.669,0.775c0.004,0,0.007,0.002,0.011,0.002c0.004,0,0.007-0.002,0.011-0.002 c1.275,0,2.148-0.253,2.669-0.775C14.831,16.556,15.078,16.556,15.229,16.708z"></path></svg>',
		),
		'twitter'   => array(
			'label' => __( 'Share on Twitter', 'the-social-share-block' ),
			'url'   => 'https://twitter.com/share?text=' . get_the_title() . '&url=' . get_the_permalink() . '',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path></svg>',
		),
	);

	if ( ! empty( $service )
		&& ! empty( $field )
		&& isset( $services_data[ $service ] )
		&& ( 'icon' === $field || 'name' === $field )
	) {
		return $services_data[ $service ][ $field ];
	} elseif ( ! empty( $service ) && isset( $services_data[ $service ] ) ) {
		return $services_data[ $service ];
	}

	return $services_data;
}

/**
 * Returns CSS styles for icon and icon background colors.
 *
 * @param array $context Block context passed to Social Share Link.
 *
 * @return string Inline CSS styles for link's icon and background colors.
 */
function block_outermost_social_share_link_get_color_styles( $context ) {
	$styles = array();

	if ( array_key_exists( 'iconColorValue', $context ) ) {
		$styles[] = 'color: ' . $context['iconColorValue'] . '; ';
	}

	if ( array_key_exists( 'iconBackgroundColorValue', $context ) ) {
		$styles[] = 'background-color: ' . $context['iconBackgroundColorValue'] . '; ';
	}

	return implode( '', $styles );
}
