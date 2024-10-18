import 'styled-components';

import { Color } from '@/styles/bagheera-def/theme-core-color.d';

import ThemeMode from '@/styles/bagheera-def/theme-mode.d';

import ThemeCore from '@/styles/bagheera-def/theme-core.d';

import { Tags } from '@/styles/bagheera-def/theme-mode-tag.d';

interface Margin {
  mobile: {
    page: string;
  };
  desktop: {
    page: string;
  };
}

interface Sizing {
  mobile: {
    navHeight: string;
    bottomNavHeight: string;
  };
  desktop: {
    navHeight: string;
    footerHeight: string;
  };
}
export interface DefaultThemeProps extends ThemeCore, ThemeMode {
  color: Color;
  tag: Tags;
  sizing: Sizing;
  margin: Margin;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DefaultThemeProps {}
}
