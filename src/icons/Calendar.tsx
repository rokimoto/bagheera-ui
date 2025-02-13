import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Calendar = ({
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
      d="M14.5 18c-.7 0-1.292-.242-1.775-.725C12.242 16.792 12 16.2 12 15.5s.242-1.292.725-1.775C13.208 13.242 13.8 13 14.5 13s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775c-.483.483-1.075.725-1.775.725ZM5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 20V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4h1V3a.97.97 0 0 1 .287-.713A.97.97 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V3c0-.283.096-.521.288-.713A.967.967 0 0 1 17 2c.283 0 .52.096.712.287.192.192.288.43.288.713v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Z"
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

export default withTheme(Calendar);
