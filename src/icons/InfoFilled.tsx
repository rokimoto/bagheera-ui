import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const InfoFilled = ({
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
      d="M12 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 16v-4.025a.928.928 0 0 0-.287-.7A.993.993 0 0 0 12 11a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 12v4.025c0 .283.096.517.288.7A.99.99 0 0 0 12 17Zm0-8a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 8c0 .283.096.52.288.712A.965.965 0 0 0 12 9Zm0 13a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z"
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

export default withTheme(InfoFilled);
