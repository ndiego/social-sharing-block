const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

module.exports = {
    ...defaultConfig,

    entry: {
        'index' : path.resolve( process.cwd(), 'src/index.js' ),
        'style' : path.resolve( process.cwd(), 'src/style.scss' ),
        'editor': path.resolve( process.cwd(), 'src/editor.scss' ),
    },

    plugins: [
        ...defaultConfig.plugins,
        // Add additional plugins as needed.
        new RemoveEmptyScriptsPlugin(),
    ],
};