import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const NotificationsFilled = ({
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
      d="M5 19a.968.968 0 0 1-.713-.288A.967.967 0 0 1 4 18c0-.283.096-.52.287-.712A.968.968 0 0 1 5 17h1v-7c0-1.383.417-2.613 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 12 2c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.387 18 8.617 18 10v7h1c.283 0 .52.096.712.288A.965.965 0 0 1 20 18c0 .283-.096.52-.288.712A.965.965 0 0 1 19 19H5Zm7 3c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 10 20h4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 12 22Z"
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

export default withTheme(NotificationsFilled);
