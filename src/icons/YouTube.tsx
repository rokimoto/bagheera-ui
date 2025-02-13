import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const YouTube = ({
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
      d="M21.582 7.2a2.513 2.513 0 0 0-1.768-1.78C18.254 5 12 5 12 5s-6.255 0-7.814.42A2.513 2.513 0 0 0 2.418 7.2C2 8.77 2 12.046 2 12.046s0 3.274.418 4.845c.23.866.908 1.548 1.768 1.78 1.56.42 7.814.42 7.814.42s6.255 0 7.814-.42a2.513 2.513 0 0 0 1.768-1.78C22 15.32 22 12.046 22 12.046s0-3.276-.418-4.846ZM9.955 15.02V9.071l5.227 2.974-5.227 2.973Z"
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

export default withTheme(YouTube);
