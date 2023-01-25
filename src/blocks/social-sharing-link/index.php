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
	$label       = ( isset( $attributes['label'] ) ) ? $attributes['label'] : block_outermost_social_sharing_link_get_label( $service );
	$phone       = ( isset( $attributes['phone'] ) ) ? $attributes['phone'] : '';
	$url         = block_outermost_social_sharing_link_get_url( $service, $phone );
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
	$link .= '<span class="wp-block-outermost-social-sharing-link-label' . ( $show_labels ? '' : ' screen-reader-text' ) . '">';
	$link .= esc_html( $label );
	$link .= '</span></a></li>';

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
 * @param string $phone Phone number attribute.
 *
 * @return string Brand label.
 */
function block_outermost_social_sharing_link_get_url( $service, $phone = '' ) {
	$services = block_outermost_social_sharing_link_services();

	if ( isset( $services[ $service ] ) && isset( $services[ $service ]['url'] ) ) {
		$url = $services[ $service ]['url'];
	} else {
		$url = $services['mail']['url'];
	}

	if ( $phone && 'whatsapp' === $service ) {
		$url .= '&phone=' . $phone;
	}

	// The print service uses Javascript and should be escaped differently.
	return 'print' === $service ? esc_js( $url ) : esc_url( $url );
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
		'flipboard' => array(
			'label' => __( 'Share on Flipboard', 'social-sharing-block' ),
			'url'   => 'https://share.flipboard.com/bookmarklet/popout?url=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><polygon points="9.333 20 4 20 4 4 20 4 20 9.333 14.667 9.333 14.667 14.667 9.333 14.667"></polygon></svg>',
		),
		'line'      => array(
			'label' => __( 'Share on LINE', 'social-sharing-block' ),
			'url'   => 'https://lineit.line.me/share/ui?url=' . $permalink . '&text=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M4.7619 2.5C3.5133 2.5 2.5 3.5133 2.5 4.7619v14.4762C2.5 20.4867 3.5133 21.5 4.7619 21.5h14.4762c1.2486 0 2.2619-1.0133 2.2619-2.2619V4.7619C21.5 3.5133 20.4867 2.5 19.2381 2.5H4.7619ZM12 5.6667c3.7412 0 6.7857 2.4244 6.7857 5.4056 0 1.1897-.4708 2.2671-1.457 3.3257-.7102.8052-1.8632 1.6916-2.9263 2.4245-1.0631.7238-2.0405 1.2935-2.4024 1.4428-.1448.0588-.2533.0857-.3393.0857-.2986 0-.2718-.3159-.2491-.447.018-.0996.0998-.5709.0998-.5709.0226-.1673.0449-.4334-.023-.6008-.0769-.1854-.38-.2808-.6017-.326-3.2571-.4252-5.6724-2.665-5.6724-5.334 0-2.9812 3.0445-5.4056 6.7857-5.4056Zm-.456 3.6181c-.2278.0043-.4488.1782-.4488.4533v2.7143c0 .2497.2027.4524.4524.4524A.4525.4525 0 0 0 12 12.4524V11.15l.9887 1.5648c.256.3583.8208.1777.8208-.2624V9.738a.4525.4525 0 0 0-.4524-.4524.4525.4525 0 0 0-.4523.4524v1.3571l-.9887-1.6195c-.096-.1344-.2353-.1934-.372-.1909Zm-4.0678.001a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524A.4525.4525 0 0 0 8.8333 12h-.9047V9.7381a.4525.4525 0 0 0-.4524-.4524Zm2.7143 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524a.4525.4525 0 0 0 .4524-.4524V9.738a.4525.4525 0 0 0-.4524-.4524Zm4.5238 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-.9047v-.4524h.9047a.4523.4523 0 0 0 .4524-.4524.4523.4523 0 0 0-.4524-.4523h-.9047v-.4524h.9047a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-1.3571Z"></path></svg>',
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
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="m14.639 3 4.222 4.235v3.177h.528c1.113 0 2.025.864 2.105 1.96l.006.157v5.295h-2.639v2.117c0 .585-.472 1.059-1.055 1.059H6.194a1.057 1.057 0 0 1-1.055-1.059v-2.117H2.5v-5.295c0-1.17.945-2.117 2.111-2.117h.528V4.059C5.139 3.474 5.61 3 6.194 3h8.445Zm2.639 13.235H6.722v3.177h10.556v-3.177Zm2.11-4.5a.793.793 0 0 0-.79.794.793.793 0 1 0 .79-.794Zm-5.277-7.147H6.722v6.883h10.556V7.765h-2.111a1.057 1.057 0 0 1-1.056-1.06V4.589Z"></path></svg>',
		),
		'reddit'    => array(
			'label' => __( 'Share on Reddit', 'social-sharing-block' ),
			'url'   => 'https://www.reddit.com/submit?url=' . $permalink . '&title=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M22 12.068a2.184 2.184 0 0 0-2.186-2.186c-.592 0-1.13.233-1.524.609-1.505-1.075-3.566-1.774-5.86-1.864l1.004-4.695 3.261.699A1.56 1.56 0 1 0 18.255 3c-.61-.001-1.147.357-1.398.877l-3.638-.77a.382.382 0 0 0-.287.053.348.348 0 0 0-.161.251l-1.112 5.233c-2.33.072-4.426.77-5.95 1.864a2.201 2.201 0 0 0-1.523-.61 2.184 2.184 0 0 0-.896 4.176c-.036.215-.053.43-.053.663 0 3.37 3.924 6.111 8.763 6.111s8.763-2.724 8.763-6.11c0-.216-.017-.449-.053-.664A2.207 2.207 0 0 0 22 12.068Zm-15.018 1.56a1.56 1.56 0 0 1 3.118 0c0 .86-.699 1.558-1.559 1.558-.86.018-1.559-.699-1.559-1.559Zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 0 1 0-.573.4.4 0 0 1 .574 0c.68.68 2.114.914 3.136.914 1.022 0 2.473-.233 3.136-.914a.4.4 0 0 1 .574 0 .436.436 0 0 1 0 .573Zm-.287-2.563a1.56 1.56 0 0 1 0-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558Z"></path></svg>',
		),
		'skype'     => array(
			'label' => __( 'Share on Skype', 'social-sharing-block' ),
			'url'   => 'https://web.skype.com/share?url=' . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"></path></svg>',
		),
		'sms'       => array(
			'label' => __( 'Share on SMS', 'social-sharing-block' ),
			'url'   => 'sms:?&body=' . $title . ' - ' . $permalink,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.696 4C20.069 4 22 5.973 22 8.398v4.357c0 2.04-1.368 3.783-3.261 4.266v4.427l-5.234-4.295h-7.2C3.93 17.153 2 15.18 2 12.755V8.398C2 5.973 3.931 4 6.304 4h11.392ZM7.028 8.515c-.98 0-1.66.562-1.66 1.349-.009.497.322.91.985 1.178l.39.142c.242.097.305.171.305.297 0 .162-.131.251-.442.251s-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.315-.224-.741-.316-1.171-.316Zm10.302 0c-.98 0-1.66.562-1.66 1.349-.008.497.322.91.985 1.178l.39.142c.243.097.305.171.305.297 0 .162-.13.251-.442.251-.311 0-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.316-.224-.741-.316-1.171-.316Zm-3.733 0c-.297 0-.55.066-.78.202l-.144.098a1.823 1.823 0 0 0-.264.247l-.078.095-.027-.077c-.15-.34-.55-.565-1.033-.565l-.169.007a1.363 1.363 0 0 0-.896.42l-.08.09-.038-.363-.075-.067H8.994l-.075.079.024.634c.005.2.008.397.008.604v2.652l.075.075h1.178l.075-.075v-2.269c0-.113.012-.202.042-.274.083-.23.262-.392.496-.392.314 0 .483.267.483.753v2.182l.075.075h1.179l.075-.075v-2.277c0-.097.016-.213.043-.285.077-.224.26-.373.486-.373.33 0 .5.272.5.817v2.118l.074.075h1.179l.075-.075v-2.293c0-1.131-.537-1.763-1.39-1.763Z"/></svg>',
		),
		'telegram'  => array(
			'label' => __( 'Share on Telegram', 'social-sharing-block' ),
			'url'   => 'https://telegram.me/share/url?url=' . $permalink . '&text=' . $title,
			'icon'  => '<svg width="24" height="24" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M28.97 63.324c18.657-8.128 31.098-13.487 37.323-16.076 17.774-7.393 21.467-8.677 23.874-8.72.53-.009 1.713.122 2.48.745.648.525.826 1.235.911 1.733.085.498.191 1.633.107 2.52-.963 10.12-5.13 34.677-7.25 46.012-.898 4.796-2.664 6.404-4.375 6.561-3.716.342-6.538-2.456-10.138-4.815-5.633-3.693-8.815-5.991-14.283-9.594-6.319-4.164-2.222-6.453 1.379-10.193.942-.98 17.318-15.874 17.634-17.225.04-.169.077-.799-.297-1.131-.375-.333-.927-.22-1.325-.129-.565.128-9.564 6.076-26.996 17.843-2.554 1.754-4.868 2.609-6.94 2.564-2.286-.05-6.681-1.292-9.95-2.354-4.007-1.303-7.193-1.992-6.915-4.205.144-1.152 1.731-2.33 4.761-3.536Z"></path></svg>',
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
			'icon'  => '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12.164 3a8.836 8.836 0 1 1-4.272 16.574L3 21.14l1.595-4.74A8.837 8.837 0 0 1 12.164 3Zm0 1.407c-4.097 0-7.43 3.333-7.43 7.43 0 1.625.526 3.13 1.415 4.355l-.928 2.76 2.855-.915a7.386 7.386 0 0 0 4.088 1.228c4.096 0 7.429-3.332 7.429-7.429 0-4.096-3.333-7.429-7.43-7.429Zm-2.795 3.4c.09 0 .172.004.248.007.221.01.33.023.474.368.103.247.289.702.439 1.066l.104.251c.063.15.11.26.125.29.054.109.103.258.03.402-.072.145-.132.212-.24.339-.109.126-.211.223-.322.357-.098.118-.213.248-.087.464.127.217.562.926 1.205 1.5.828.738 1.503.973 1.743 1.075.182.078.394.058.526-.081.167-.178.37-.478.58-.77.154-.21.337-.233.536-.16.083.03.316.138.575.262l.316.153c.261.126.499.244.59.289.216.109.36.162.414.253.054.09.054.524-.126 1.03-.18.505-.892.922-1.459 1.046-.389.085-.896.148-2.602-.559-2.187-.906-3.593-3.125-3.701-3.27-.108-.144-.884-1.174-.884-2.24 0-1.065.541-1.584.758-1.806.178-.182.473-.266.758-.266Z"></path></svg>',
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
