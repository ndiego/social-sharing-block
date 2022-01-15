/**
 * External dependencies
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const { escapeRegExp } = require( 'lodash' );
const { join, sep } = require( 'path' );
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,

	entry: {
		'index' : path.resolve( process.cwd(), 'src/index.js' ),
		'style' : path.resolve( process.cwd(), 'src/index.scss' ),
		'editor': path.resolve( process.cwd(), 'src/editor.scss' ),
	},

	plugins: [
		...defaultConfig.plugins,

		new RemoveEmptyScriptsPlugin(),
		new CopyWebpackPlugin( {
			patterns: [].concat(
				Object.entries( {
					'src': 'blocks/',
				} ).flatMap( ( [ from, to ] ) => [
					{
						from: `${ from }/**/index.php`,
						to( { absoluteFilename } ) {
							const [ , dirname ] = absoluteFilename.match(
								new RegExp(
									`([\\w-]+)${ escapeRegExp(
										sep
									) }index\\.php$`
								)
							);

							return join( to, `${ dirname }.php` );
						},
						noErrorOnMissing: true,
					},
					{
						from: `${ from }/*/block.json`,
						to( { absoluteFilename } ) {
							const [ , dirname ] = absoluteFilename.match(
								new RegExp(
									`([\\w-]+)${ escapeRegExp(
										sep
									) }block\\.json$`
								)
							);

							return join( to, dirname, 'block.json' );
						},
					},
				] )
			),
		} ),
	],
};