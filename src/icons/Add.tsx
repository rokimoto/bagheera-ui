import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Add = ({
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
      d="M12 19a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 18v-5H6a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0 1 12 5a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 6v5h5c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 18 13h-5v5c0 .283-.096.52-.287.712A.968.968 0 0 1 12 19Z"
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

export default withTheme(Add);
