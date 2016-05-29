var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpackPostcssTools = require("webpack-postcss-tools")
var HtmlWebpackPlugin = require("html-webpack-plugin")

var production = process.argv.indexOf("--production") > -1
var utestMode = process.argv.indexOf("--test") > -1
var config = require("./project.config.js")

var variablesMap = webpackPostcssTools.makeVarMap(config.src+"/css/variables.global.css");

var entry = {
    landing: config.src+"/index.js",
    vendor: ["react", "react-dom","redux","react-redux","react-router","react-router-redux","react-intl"],
}
var filename = "[name].[hash].bundle.js"
if(utestMode){
    entry = {test:config.test}
    filename= "test.bundle.js"
}


module.exports = {
    entry,
    output: {
        path: config.dist,
        filename: filename,
        publicPath: "/",
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
                test: /\.json$/,
                loader: "json-loader",
                include: config.src,
            },
            {
                test: /\.(ico|jpe?g|png|gif)$/,
                loader: "file-loader",
                query: {
                    name: "[path][name].[ext]",
                    context:config.src,
                },
                include: config.src,
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
        new ExtractTextPlugin("css/landing.[contenthash].css"),
        new webpack.DefinePlugin({
            __PROD__: production
        }),
        new webpack.ProvidePlugin({
            fetch: "exports-loader?self.fetch!whatwg-fetch"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            excludeChunks: ["tests"]
        }),
    ]
    .concat(
      production ? [
          new webpack.optimize.CommonsChunkPlugin(
              "vendor",/* chunkName */
              "vendor.[hash].bundle.js"/* filename */
          ),
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
