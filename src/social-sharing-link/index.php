<?php
/**
 * Server-side rendering of the `outermost/social-sharing-link` block.
 *
 * @package Social Sharing Block
 */

/**
 * Renders the `outermost/social-sharing-link` block on server.
 *
 * @param Array    $attributes The block attributes.
 * @param String   $content    InnerBlocks content of the Block.
 * @param WP_Block $block      Block object.
 *
 * @return string Rendered HTML of the referenced block.
 */
function render_block_outermost_social_sharing_link( $attributes, $content, $block ) { // phpcs:ignore
	$service     = ( isset( $attributes['service'] ) ) ? $attributes['service'] : 'mail';
	$url         = block_outermost_social_sharing_link_get_url( $service );
	$label       = ( isset( $attributes['label'] ) ) ? $attributes['label'] : block_outermost_social_sharing_link_get_label( $service );
	$show_labels = array_key_exists( 'showLabels', $block->context ) ? $block->context['showLabels'] : false;
	$class_name  = isset( $attributes['className'] ) ? ' ' . $attributes['className'] : false;

	$rel_target_attributes = '';

	if ( 'print' !== $service && 'mail' !== $service ) {
		$rel_target_attributes = 'rel="noopener nofollow" target="_blank"';
	}

	$icon               = block_outermost_social_sharing_link_get_icon( $service );
	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => 'outermost-social-sharing-link outermost-social-sharing-link-' . $service . $class_name,
			'style' => block_outermost_social_sharing_link_get_color_styles( $block->context ),
		)
	);

	$link  = '<li ' . $wrapper_attributes . '>';
	$link .= '<a href="' . $url . '" aria-label="' . esc_attr( $label ) . '" ' . $rel_target_attributes . ' class="wp-block-outermost-social-sharing-link-anchor">';
	$link .= $icon;

	if ( $show_labels ) {
		$link .= '<span class="wp-block-outermost-social-sharing-link-label">' . esc_attr( $label ) . '</span>';
	}

	$link .= '</a></li>';

	return $link;
}

/**
 * Registers the `outermost/social-sharing-link` block on the server.
 */
function register_block_outermost_social_sharing_link() {
	register_block_type_from_metadata(
		__DIR__ . '/social-sharing-link',
		array(
			'render_callback' => 'render_block_outermost_social_sharing_link',
		)
	);
}
add_action( 'init', 'register_block_outermost_social_sharing_link' );


/**
 * Returns the SVG for social link.
 *
 * @param string $service The service icon.
 *
 * @return string SVG Element for service icon.
 */
function block_outermost_social_sharing_link_get_icon( $service ) {
	$services = block_outermost_social_sharing_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['icon'] ) ) {
		return $services[ $service ]['icon'];
	}

	return $services['mail']['icon'];
}

/**
 * Returns the brand name for the Social Sharing Link.
 *
 * @param string $service The service icon.
 *
 * @return string Brand label.
 */
function block_outermost_social_sharing_link_get_label( $service ) {
	$services = block_outermost_social_sharing_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['label'] ) ) {
		return $services[ $service ]['label'];
	}

	return $services['mail']['label'];
}

/**
 * Returns the brand name for the Social Sharing Link.
 *
 * @param string $service The service icon.
 *
 * @return string Brand label.
 */
function block_outermost_social_sharing_link_get_url( $service ) {
	$services = block_outermost_social_sharing_link_services();
	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['url'] ) ) {
		// The print service uses Javascript and should be escaped differently.
		return 'print' === $service ? esc_js( $services[ $service ]['url'] ) : esc_url( $services[ $service ]['url'] );
	}

	return $services['mail']['url'];
}

/**
 * Returns the SVG for the Social Sharing Link.
 *
 * @param string $service The service slug to extract data from.
 * @param string $field The field ('name', 'icon', etc) to extract for a service.
 *
 * @return array|string
 */
function block_outermost_social_sharing_link_services( $service = '', $field = '' ) {
	global $post;

	if ( has_post_thumbnail() ) {
		$thumbnail_id = get_post_thumbnail_id( $post->ID );
		$thumbnail    = $thumbnail_id ? current( wp_get_attachment_image_src( $thumbnail_id, 'large', true ) ) : '';
	} else {
		$thumbnail = null;
	}

	$permalink = rawurlencode( get_the_permalink() );
	$title     = rawurlencode( get_the_title() );
	$image     = rawurlencode( esc_url( $thumbnail ) );
	$separator = '%20&mdash;%20';

	$services_data = array(
		'facebook'  => array(
			'label' => __( 'Share on Facebook', 'social-sharing-block' ),
			'url'   => 'https://www.facebook.com/sharer/sharer.php?u=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg>',
		),
		'linkedin'  => array(
			'label' => __( 'Share on LinkedIn', 'social-sharing-block' ),
			'url'   => 'https://www.linkedin.com/shareArticle?mini=true&url=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg>',
		),
		'mail'      => array(
			'label' => __( 'Email this Page', 'social-sharing-block' ),
			'url'   => 'mailto:?subject=' . $title . '&body=' . $title . $separator . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"></path></svg>',
		),
		'pinterest' => array(
			'label' => __( 'Share on Pinterest', 'social-sharing-block' ),
			'url'   => 'https://pinterest.com/pin/create/button/?&url=' . $permalink . '&description=' . $title . '&media=' . $image,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"></path></svg>',
		),
		'pocket'    => array(
			'label' => __( 'Share on Pocket', 'social-sharing-block' ),
			'url'   => 'https://getpocket.com/save/?url=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"></path></svg>',
		),
		'print'     => array(
			'label' => __( 'Print this Page', 'social-sharing-block' ),
			'url'   => 'javascript:window.print()',
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M14.6388889,3 L18.8611111,7.23529412 L18.8611111,10.4117647 L19.3888889,10.4117647 C20.5018263,10.4117647 21.4136187,11.2756353 21.4942095,12.3713693 L21.5,12.5294118 L21.5,17.8235294 L18.8611111,17.8235294 L18.8611111,19.9411765 C18.8611111,20.5259486 18.3885228,21 17.8055556,21 L6.19444444,21 C5.61147721,21 5.13888889,20.5259486 5.13888889,19.9411765 L5.13888889,17.8235294 L2.5,17.8235294 L2.5,12.5294118 C2.5,11.3598676 3.44517664,10.4117647 4.61111111,10.4117647 L5.13888889,10.4117647 L5.13888889,4.05882353 C5.13888889,3.47405144 5.61147721,3 6.19444444,3 L14.6388889,3 Z M17.2777778,16.2352941 L6.72222222,16.2352941 L6.72222222,19.4117647 L17.2777778,19.4117647 L17.2777778,16.2352941 Z M19.3888889,11.7352941 C18.9516635,11.7352941 18.5972222,12.0908327 18.5972222,12.5294118 C18.5972222,12.9679908 18.9516635,13.3235294 19.3888889,13.3235294 C19.8261143,13.3235294 20.1805556,12.9679908 20.1805556,12.5294118 C20.1805556,12.0908327 19.8261143,11.7352941 19.3888889,11.7352941 Z M14.1111111,4.58823529 L6.72222222,4.58823529 L6.72222222,11.4705882 L17.2777778,11.4705882 L17.2777778,7.76470588 L15.1666667,7.76470588 C14.5836994,7.76470588 14.1111111,7.29065444 14.1111111,6.70588235 L14.1111111,4.58823529 Z"></path></svg>',
		),
		'reddit'    => array(
			'label' => __( 'Share on Reddit', 'social-sharing-block' ),
			'url'   => 'https://www.reddit.com/submit?url=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M22,11.816c0-1.256-1.021-2.277-2.277-2.277c-0.593,0-1.122,0.24-1.526,0.614c-1.481-0.965-3.455-1.594-5.647-1.69 l1.171-3.702l3.18,0.748c0.008,1.028,0.846,1.862,1.876,1.862c1.035,0,1.877-0.842,1.877-1.878c0-1.035-0.842-1.877-1.877-1.877 c-0.769,0-1.431,0.466-1.72,1.13l-3.508-0.826c-0.203-0.047-0.399,0.067-0.46,0.261l-1.35,4.268 c-2.316,0.038-4.411,0.67-5.97,1.671C5.368,9.765,4.853,9.539,4.277,9.539C3.021,9.539,2,10.56,2,11.816 c0,0.814,0.433,1.523,1.078,1.925c-0.037,0.221-0.061,0.444-0.061,0.672c0,3.292,4.011,5.97,8.941,5.97s8.941-2.678,8.941-5.97 c0-0.214-0.02-0.424-0.053-0.632C21.533,13.39,22,12.661,22,11.816z M18.776,4.394c0.606,0,1.1,0.493,1.1,1.1s-0.493,1.1-1.1,1.1 s-1.1-0.494-1.1-1.1S18.169,4.394,18.776,4.394z M2.777,11.816c0-0.827,0.672-1.5,1.499-1.5c0.313,0,0.598,0.103,0.838,0.269 c-0.851,0.676-1.477,1.479-1.812,2.36C2.983,12.672,2.777,12.27,2.777,11.816z M11.959,19.606c-4.501,0-8.164-2.329-8.164-5.193 S7.457,9.22,11.959,9.22s8.164,2.329,8.164,5.193S16.46,19.606,11.959,19.606z M20.636,13.001c-0.326-0.89-0.948-1.701-1.797-2.384 c0.248-0.186,0.55-0.301,0.883-0.301c0.827,0,1.5,0.673,1.5,1.5C21.223,12.299,20.992,12.727,20.636,13.001z M8.996,14.704 c-0.76,0-1.397-0.616-1.397-1.376c0-0.76,0.637-1.397,1.397-1.397c0.76,0,1.376,0.637,1.376,1.397 C10.372,14.088,9.756,14.704,8.996,14.704z M16.401,13.328c0,0.76-0.616,1.376-1.376,1.376c-0.76,0-1.399-0.616-1.399-1.376 c0-0.76,0.639-1.397,1.399-1.397C15.785,11.931,16.401,12.568,16.401,13.328z M15.229,16.708c0.152,0.152,0.152,0.398,0,0.55 c-0.674,0.674-1.727,1.002-3.219,1.002c-0.004,0-0.007-0.002-0.011-0.002c-0.004,0-0.007,0.002-0.011,0.002 c-1.492,0-2.544-0.328-3.218-1.002c-0.152-0.152-0.152-0.398,0-0.55c0.152-0.152,0.399-0.151,0.55,0 c0.521,0.521,1.394,0.775,2.669,0.775c0.004,0,0.007,0.002,0.011,0.002c0.004,0,0.007-0.002,0.011-0.002 c1.275,0,2.148-0.253,2.669-0.775C14.831,16.556,15.078,16.556,15.229,16.708z"></path></svg>',
		),
		'skype'     => array(
			'label' => __( 'Share on Skype', 'social-sharing-block' ),
			'url'   => 'https://web.skype.com/share?url=' . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"></path></svg>',
		),
		'telegram'  => array(
			'label' => __( 'Share on Telegram', 'social-sharing-block' ),
			'url'   => 'https://telegram.me/share/url?url=' . $permalink . '&text=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M28.9700376,63.3244248 C47.6273373,55.1957357 60.0684594,49.8368063 66.2934036,47.2476366 C84.0668845,39.855031 87.7600616,38.5708563 90.1672227,38.528 C90.6966555,38.5191258 91.8804274,38.6503351 92.6472251,39.2725385 C93.294694,39.7979149 93.4728387,40.5076237 93.5580865,41.0057381 C93.6433345,41.5038525 93.7494885,42.63857 93.6651041,43.5252052 C92.7019529,53.6451182 88.5344133,78.2034783 86.4142057,89.5379542 C85.5170662,94.3339958 83.750571,95.9420841 82.0403991,96.0994568 C78.3237996,96.4414641 75.5015827,93.6432685 71.9018743,91.2836143 C66.2690414,87.5912212 63.0868492,85.2926952 57.6192095,81.6896017 C51.3004058,77.5256038 55.3966232,75.2369981 58.9976911,71.4967761 C59.9401076,70.5179421 76.3155302,55.6232293 76.6324771,54.2720454 C76.6721165,54.1030573 76.7089039,53.4731496 76.3346867,53.1405352 C75.9604695,52.8079208 75.4081573,52.921662 75.0095933,53.0121213 C74.444641,53.1403447 65.4461175,59.0880351 48.0140228,70.8551922 C45.4598218,72.6091037 43.1463059,73.4636682 41.0734751,73.4188859 C38.7883453,73.3695169 34.3926725,72.1268388 31.1249416,71.0646282 C27.1169366,69.7617838 23.931454,69.0729605 24.208838,66.8603276 C24.3533167,65.7078514 25.9403832,64.5292172 28.9700376,63.3244248 Z"></path></svg>',
		),
		'tumblr'    => array(
			'label' => __( 'Share on Tumblr', 'social-sharing-block' ),
			'url'   => 'http://tumblr.com/widgets/share/tool?canonicalUrl=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-5.02v-5.67H6.08V7.5c2.93-.73 4.11-3.3 4.3-5.48h3.01v4.93h3.47v3.65H13.4v4.93c0 1.47.73 2.01 1.92 2.01h1.73v3.75z"></path></svg>',
		),
		'twitter'   => array(
			'label' => __( 'Share on Twitter', 'social-sharing-block' ),
			'url'   => 'https://twitter.com/share?text=' . $title . '&url=' . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path></svg>',
		),
		'whatsapp'  => array(
			'label' => __( 'Share on WhatsApp', 'social-sharing-block' ),
			'url'   => 'https://api.whatsapp.com/send?text=' . $title . $separator . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12.1635617,3 C17.0437112,3 21,6.95613077 21,11.8365963 C21,16.7167459 17.0437112,20.6727187 12.1635617,20.6727187 C10.6142088,20.6727187 9.15830843,20.2737087 7.89239398,19.5735652 L7.89239398,19.5735652 L3,21.1400603 L4.59477572,16.3991811 C3.79012021,15.0672258 3.32680737,13.5059445 3.32680737,11.8365963 C3.32680737,6.95613077 7.28309613,3 12.1635617,3 Z M12.1635617,4.40723869 C8.06697563,4.40723869 4.73420405,7.73993127 4.73420405,11.8364383 C4.73420405,13.4624175 5.25968691,14.9673746 6.14902637,16.192132 L6.14902637,16.192132 L5.22113676,18.951154 L8.07613919,18.0368517 C9.24931207,18.8128316 10.6544179,19.26548 12.1635617,19.26548 C16.2599107,19.26548 19.5927613,15.9327874 19.5927613,11.8364383 C19.5927613,7.73993127 16.2599107,4.40723869 12.1635617,4.40723869 Z M9.36907035,7.80723605 C9.45904704,7.80723605 9.54128211,7.81071189 9.61711848,7.81434571 C9.8382289,7.82485221 9.94787566,7.83654365 10.0910168,8.18152015 C10.1938473,8.42943286 10.3795046,8.88359987 10.5298931,9.24760341 L10.6342264,9.49906888 C10.696913,9.64926672 10.7434015,9.75839758 10.7589299,9.78940924 C10.8131213,9.89787105 10.8617039,10.0469369 10.7895014,10.191342 C10.7172989,10.3360631 10.6567878,10.4034469 10.5484839,10.5299988 C10.4401801,10.6563138 10.337722,10.7529262 10.2266533,10.8874567 C10.129251,11.0053191 10.0139955,11.1346359 10.1403895,11.3512435 C10.2667834,11.5681672 10.7015786,12.2772372 11.3453978,12.8512238 C12.1728832,13.5889695 12.8477479,13.8241412 13.0875015,13.9262834 C13.2698248,14.0037787 13.4818506,13.9843456 13.6136163,13.8448383 C13.7814833,13.6670968 13.9841876,13.3673061 14.1949495,13.0755731 C14.3476492,12.8643372 14.5312364,12.8422972 14.7298329,12.9144998 C14.8125485,12.9445512 15.0457136,13.0530504 15.3052621,13.1772413 L15.6214442,13.3297861 C15.882249,13.4564895 16.1198109,13.5737825 16.2100641,13.6189091 C16.4266718,13.7275289 16.5710769,13.7814833 16.6252683,13.871934 C16.6793807,13.9619897 16.6793807,14.3955999 16.4988743,14.9014917 C16.3183679,15.4070675 15.606928,15.8243256 15.0403671,15.9480337 C14.6509947,16.0331916 14.1442339,16.0961516 12.4375206,15.3892144 C10.2509052,14.4832067 8.84548339,12.2641239 8.73702158,12.1197188 C8.62887575,11.9751557 7.85265888,10.945282 7.85265888,9.87946493 C7.85265888,8.81380591 8.39425697,8.29480073 8.61086461,8.07321633 C8.7888431,7.89113004 9.08420997,7.80723605 9.36907035,7.80723605 Z"></path></svg>',
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
 * @param array $context Block context passed to Social Sharing Link.
 *
 * @return string Inline CSS styles for link's icon and background colors.
 */
function block_outermost_social_sharing_link_get_color_styles( $context ) {
	$styles = array();

	if ( array_key_exists( 'iconColorValue', $context ) ) {
		$styles[] = 'color: ' . $context['iconColorValue'] . '; ';
	}

	if ( array_key_exists( 'iconBackgroundColorValue', $context ) ) {
		$styles[] = 'background-color: ' . $context['iconBackgroundColorValue'] . '; ';
	}

	return implode( '', $styles );
}
