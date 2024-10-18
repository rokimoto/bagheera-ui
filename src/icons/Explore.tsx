import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Explore = ({
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
      d="m7.425 17.075 6.25-2.925c.1-.05.192-.117.275-.2.083-.083.15-.175.2-.275l2.925-6.25c.083-.167.062-.312-.063-.437s-.27-.146-.437-.063l-6.25 2.925c-.1.05-.192.117-.275.2-.083.083-.15.175-.2.275l-2.925 6.25c-.083.167-.062.312.063.437s.27.146.437.063ZM12 13a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 12c0-.283.096-.521.288-.713A.967.967 0 0 1 12 11a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 12c0 .283-.096.52-.287.712A.968.968 0 0 1 12 13Zm0 9a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20Z"
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

export default withTheme(Explore);
