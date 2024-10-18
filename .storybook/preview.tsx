import GlobalStyle from '../src/styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import {theme} from '../src/styles/theme/theme';
import {themeDark} from '../src/styles/theme/theme-dark';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: themeDark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
