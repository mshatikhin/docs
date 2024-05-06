const dedent = require("dedent");
module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-export-to-codesandbox"
    ],
    "webpackFinal": config => {
        if (config.module && config.module.rules) {
            config.module.rules.unshift({
                test: /\.stories\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            require('storybook-addon-export-to-codesandbox\\dist\\cjs\\plugins\\fullsource.js'),
                            // require('storybook-addon-export-to-codesandbox\\dist\\cjs\\plugins\\removeStorybookParameters.js'),
                        ],
                    },
                },
            });
        }

        return config;
    }
}