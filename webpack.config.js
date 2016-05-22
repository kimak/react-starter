var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpackPostcssTools = require("webpack-postcss-tools")

var production = process.argv.indexOf("--production") > -1
var config = require("./project.config.js")

var variablesMap = webpackPostcssTools.makeVarMap(config.src+"/css/variables.global.css");

module.exports = {
    entry: {
        index: [
            config.src+"/index.js",
        ],
        vendor: ["react", "react-dom","redux","react-redux","react-router","react-router-redux"],
    },
    output: {
        path: config.dist,
        filename: "landing.bundle.js",
        publicPath: "/assets",
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        modulesDirectories: [config.src, "node_modules"],
        extensions: [
            "",
            ".js",
        ],
    },
    module: {
        noParse: [/(.*)\/__tests__/],
        preLoaders: [
           { test: /\.(css)$/, loader: "stylelint-loader" }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: config.src,
                loaders: [
                    "babel-loader",
                    "eslint-loader",
                ],
            },
            {
                test: /\.(ico|jpe?g|png|gif)$/,
                loader: "file",
                query: {
                    name: "[path][name].[ext]",
                    context: config.src
                },
                include: config.src
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                  "style-loader",
                  "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
                 ),
                include: config.src,
                exclude: /node_modules/
            },
        ]
    },
    plugins: (
    [
        new ExtractTextPlugin("css/landing.css"),
        new webpack.DefinePlugin({
            __PROD__: production
        }),
        new webpack.optimize.CommonsChunkPlugin(
            "vendor",/* chunkName */
            "vendor.bundle.js"/* filename */
        ),
    ]
    .concat(
      production ? [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.AggressiveMergingPlugin(),
          new webpack.optimize.UglifyJsPlugin({
              compress: {
                  warnings: false,
              },
              output: {
                  comments: false
              }
          }),
      ] : []
    )
  ),
    postcss: [
        webpackPostcssTools.prependTildesToImports,
        require("autoprefixer"),
        require("postcss-custom-properties")({
            variables: variablesMap.vars
        }),
        require("postcss-custom-media")({
            extensions: variablesMap.media
        }),
        require("postcss-calc")
    ],
}
