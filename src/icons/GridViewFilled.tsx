import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const GridViewFilled = ({
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
      d="M5 11c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 0 1 3 9V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 9 11H5Zm0 10c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19v-4c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 13h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 9 21H5Zm10-10c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 13 9V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 15 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0 1 19 11h-4Zm0 10c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 13 19v-4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 15 13h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21h-4Z"
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

export default withTheme(GridViewFilled);
