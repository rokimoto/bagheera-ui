import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ArrowForward = ({
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
      d="M11.3 19.3a.994.994 0 0 1-.288-.7.91.91 0 0 1 .263-.7l4.9-4.9H5a.968.968 0 0 1-.713-.288A.967.967 0 0 1 4 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 11h11.175l-4.9-4.9a.91.91 0 0 1-.263-.7.994.994 0 0 1 .288-.7.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l6.6 6.6c.1.083.171.187.213.312.041.125.062.255.062.388s-.02.258-.062.375a.883.883 0 0 1-.213.325l-6.6 6.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z"
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

export default withTheme(ArrowForward);
