import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const AndroidFlipCamera = ({
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
      d="M12 15a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 9 12c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 9c.833 0 1.542.292 2.125.875S15 11.167 15 12s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 12 15Zm-9-5a.965.965 0 0 1-.712-.288A.965.965 0 0 1 2 9V5c0-.283.096-.521.288-.713A.967.967 0 0 1 3 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 4 5v1a9.871 9.871 0 0 1 3.525-2.95C8.925 2.35 10.417 2 12 2c2.167 0 4.108.625 5.825 1.875A9.974 9.974 0 0 1 21.45 8.75c.117.333.079.625-.113.875-.191.25-.479.375-.862.375-.183 0-.367-.071-.55-.213a1.292 1.292 0 0 1-.4-.487 7.86 7.86 0 0 0-2.9-3.837C15.258 4.488 13.717 4 12 4a7.9 7.9 0 0 0-4 1.062A7.618 7.618 0 0 0 5.1 8H7a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 9c0 .283-.096.52-.287.712A.968.968 0 0 1 7 10H3Zm9 12c-2.167 0-4.108-.625-5.825-1.875A9.974 9.974 0 0 1 2.55 15.25c-.117-.333-.079-.625.113-.875.191-.25.479-.375.862-.375.183 0 .367.07.55.212a1.3 1.3 0 0 1 .4.488 7.865 7.865 0 0 0 2.9 3.838C8.742 19.513 10.283 20 12 20a7.9 7.9 0 0 0 4-1.062A7.619 7.619 0 0 0 18.9 16H17a.965.965 0 0 1-.712-.288A.965.965 0 0 1 16 15c0-.283.096-.521.288-.713A.967.967 0 0 1 17 14h4c.283 0 .52.096.712.287.192.192.288.43.288.713v4c0 .283-.096.52-.288.712A.965.965 0 0 1 21 20a.965.965 0 0 1-.712-.288A.965.965 0 0 1 20 19v-1a9.871 9.871 0 0 1-3.525 2.95c-1.4.7-2.892 1.05-4.475 1.05Z"
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

export default withTheme(AndroidFlipCamera);
