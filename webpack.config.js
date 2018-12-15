const path = require("path")
const webpack = require("webpack")




module.exports = {
    entry: {
        index: "./src/index.js",
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [
            "node_modules/",
        ],
        extensions: [" ", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', "stage-0"]
                    }
                }
            }
        ]
    },

    devtool : "cheap-module-eval-source-map"
}
