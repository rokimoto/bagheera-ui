import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Edit = ({
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
      d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.575 1.92 1.92 0 0 1 1.412.575l1.4 1.4c.383.383.583.846.6 1.388a1.806 1.806 0 0 1-.55 1.387L19.3 8.925ZM4 21a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 20v-2.825a1.03 1.03 0 0 1 .3-.725l10.3-10.3 4.25 4.25-10.3 10.3a1 1 0 0 1-.725.3H4ZM14.325 9.675l-.7-.7 1.4 1.4-.7-.7Z"
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

export default withTheme(Edit);
