import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VolumeOffFilled = ({
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
      d="m19.1 21.9-2.325-2.325c-.233.133-.467.262-.7.387a7.128 7.128 0 0 1-.725.338.888.888 0 0 1-.925-.125c-.283-.217-.425-.517-.425-.9 0-.183.054-.346.163-.487a.953.953 0 0 1 .412-.313 5.33 5.33 0 0 0 .75-.35L12 14.8v2.775c0 .45-.204.762-.613.937-.408.175-.77.105-1.087-.212L7 15H4a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 14v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 4 9h2.2L2.1 4.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l17 17a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.949.949 0 0 1-.7.275.948.948 0 0 1-.7-.275ZM15.35 3.65a8.905 8.905 0 0 1 4.1 3.275c1.033 1.5 1.55 3.183 1.55 5.05 0 .883-.12 1.733-.362 2.55A8.814 8.814 0 0 1 19.6 16.8l-1.45-1.45a6.81 6.81 0 0 0 .638-1.625c.141-.567.212-1.15.212-1.75 0-1.467-.404-2.783-1.212-3.95a6.976 6.976 0 0 0-3.213-2.55.838.838 0 0 1-.425-.325.882.882 0 0 1-.15-.5c0-.367.142-.658.425-.875a.888.888 0 0 1 .925-.125Zm.9 9.8L14 11.2V7.95a4.154 4.154 0 0 1 1.838 1.65A4.57 4.57 0 0 1 16.5 12a4.314 4.314 0 0 1-.25 1.45ZM12 9.2 9.4 6.6l.9-.9c.317-.317.679-.388 1.087-.213.409.175.613.488.613.938V9.2Z"
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

export default withTheme(VolumeOffFilled);
