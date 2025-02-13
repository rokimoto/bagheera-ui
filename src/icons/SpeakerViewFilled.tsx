import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SpeakerViewFilled = ({
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
      d="M19 8a.967.967 0 0 1-.712-.287A.968.968 0 0 1 18 7V5c0-.283.096-.521.288-.713A.967.967 0 0 1 19 4h2c.283 0 .52.096.712.287.192.192.288.43.288.713v2a.968.968 0 0 1-.288.713A.967.967 0 0 1 21 8h-2Zm0 6a.965.965 0 0 1-.712-.288A.965.965 0 0 1 18 13v-2c0-.283.096-.521.288-.713A.967.967 0 0 1 19 10h2c.283 0 .52.096.712.287.192.192.288.43.288.713v2c0 .283-.096.52-.288.712A.965.965 0 0 1 21 14h-2ZM3 20a.965.965 0 0 1-.712-.288A.965.965 0 0 1 2 19V5c0-.283.096-.521.288-.713A.967.967 0 0 1 3 4h12a.97.97 0 0 1 .713.287A.97.97 0 0 1 16 5v14c0 .283-.096.52-.287.712A.968.968 0 0 1 15 20H3Zm16 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 18 19v-2c0-.283.096-.52.288-.712A.965.965 0 0 1 19 16h2c.283 0 .52.096.712.288A.965.965 0 0 1 22 17v2c0 .283-.096.52-.288.712A.965.965 0 0 1 21 20h-2Z"
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

export default withTheme(SpeakerViewFilled);
