import { createGlobalStyle } from 'styled-components';
import { reset } from '@/styles/reset';
import { theme } from '@/styles/theme/theme';

const GlobalStyles = createGlobalStyle`

${reset}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: ${theme.typeface.ownersText};
}


`;

export default GlobalStyles;
