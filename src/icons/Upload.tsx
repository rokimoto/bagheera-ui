import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Upload = ({
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
      d="M12 16a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 15V7.85L9.125 9.725c-.2.2-.433.3-.7.3-.267 0-.508-.108-.725-.325a.93.93 0 0 1-.287-.713A.975.975 0 0 1 7.7 8.3l3.6-3.6c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.258.02.375.062a.883.883 0 0 1 .325.213l3.6 3.6c.2.2.296.437.287.712a.976.976 0 0 1-.287.688c-.2.2-.437.304-.712.312a.93.93 0 0 1-.713-.287L13 7.85V15c0 .283-.096.52-.287.712A.968.968 0 0 1 12 16Zm-6 4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 18v-2a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 15a.97.97 0 0 1 .713.287A.97.97 0 0 1 6 16v2h12v-2c0-.283.096-.521.288-.713A.967.967 0 0 1 19 15c.283 0 .52.096.712.287.192.192.288.43.288.713v2c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 20H6Z"
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

export default withTheme(Upload);
