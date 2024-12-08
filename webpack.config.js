/**
 * External dependencies
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const { escapeRegExp } = require( 'lodash' );
const { join, sep } = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const RtlCssPlugin  = require( 'rtlcss-webpack-plugin' );

module.exports = {
	...defaultConfig,

	plugins: [
		...defaultConfig.plugins.filter(
			( filter ) => ! ( filter instanceof RtlCssPlugin )
		),

		// Copy utility files to build.
		new CopyWebpackPlugin( {
			patterns: [].concat(
				Object.entries( {
					'src': '',
				} ).flatMap( ( [ from, to ] ) => [
					{
						from: `${ from }/**/utils.php`,
						to( { absoluteFilename } ) {
							const [ , dirname ] = absoluteFilename.match(
								new RegExp(
									`([\\w-]+)${ escapeRegExp(
										sep
									) }utils\\.php$`
								)
							);

							return join( to, `${ dirname }/utils.php` );
						},
						noErrorOnMissing: true,
					},
				] )
			),
		} ),
	],
};