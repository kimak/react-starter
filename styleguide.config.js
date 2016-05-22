var webpackConfigOrigin = require("./webpack.config.js")
var config = require("./project.config.js")

module.exports = {
    template: "index.html",
    components: config.src+"/components/**/*.js",
    getExampleFilename: function(componentpath) {
        return componentpath.replace(/\.js?$/, ".md");
    },
    updateWebpackConfig: function(webpackConfig) {
        webpackConfig.module.loaders = webpackConfigOrigin.module.loaders.concat(webpackConfig.module.loaders)
        webpackConfig.plugins = webpackConfigOrigin.plugins.concat(webpackConfig.plugins)
        webpackConfig.noParse= webpackConfigOrigin.noParse
        webpackConfig.postcss= webpackConfigOrigin.postcss
        webpackConfig.resolve.modulesDirectories = webpackConfig.resolve.modulesDirectories.concat(webpackConfigOrigin.resolve.modulesDirectories)
        webpackConfig.entry.push(config.src+"/css/layout.css");

        return webpackConfig;
    },
};
