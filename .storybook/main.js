const path = require("path");
const custom = require("../webpack.common.js");
const webpack = require("webpack");

const webpackResolve = {
    alias: {
        "^components(.*)$": "../src/components$1",
        // Add aliases here if needed -->  `alias: path.resolve(__dirname, "../src/alias-path"),`
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".svg", ".css", ".json"],
};

module.exports = {
    stories: ["../src/**/*.story.tsx"],
    addons: ["@storybook/addon-postcss", "@storybook/addon-actions"],
    webpackFinal: async config => {
        config.devServer = { stats: "errors-only" };

        config.resolve = webpackResolve;

        return { ...custom.config, ...config };
    },
};
