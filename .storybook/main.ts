import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-styling",
    '@storybook/addon-knobs',
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
          test: /\.s[ac]ss$/i,
          sideEffects: true,
          use: [
            require.resolve("style-loader"), {
              loader: require.resolve("css-loader"),
              options: { },
            },
          ],
          include: path.resolve(__dirname, "../")
        }]
      }
    })
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      return config
    }
    
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
export default config;
