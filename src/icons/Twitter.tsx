import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Twitter = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M19.9 8.136c.011.175.011.35.011.527 0 5.381-4.097 11.588-11.588 11.588v-.003a11.53 11.53 0 0 1-6.242-1.826 8.178 8.178 0 0 0 6.027-1.688 4.078 4.078 0 0 1-3.805-2.828 4.06 4.06 0 0 0 1.839-.07 4.073 4.073 0 0 1-3.267-3.992v-.052c.566.315 1.2.49 1.848.51a4.078 4.078 0 0 1-1.26-5.438 11.56 11.56 0 0 0 8.393 4.255 4.077 4.077 0 0 1 6.94-3.715 8.172 8.172 0 0 0 2.587-.989 4.088 4.088 0 0 1-1.79 2.253 8.1 8.1 0 0 0 2.338-.641 8.274 8.274 0 0 1-2.032 2.11Z"
      fill={
        isHex(contentColor)
          ? contentColor
          : contentColor === 'brand-gradient'
          ? 'url(#linear-gradient)'
          : theme.contentColor[contentColor]
      }
    />
  </svg>
);

export default withTheme(Twitter);
