import type { Preview } from "@storybook/react";
import "../src/app/styles/index.scss";
import { withThemeByClassName } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "app light",
      dark: "app dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
