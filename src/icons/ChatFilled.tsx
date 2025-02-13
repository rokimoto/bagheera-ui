import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ChatFilled = ({
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
      d="M7 14h6.025a.926.926 0 0 0 .7-.288A.99.99 0 0 0 14 13a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 12H6.975a.928.928 0 0 0-.7.287A.993.993 0 0 0 6 13c0 .283.096.52.287.712.192.192.43.288.713.288Zm0-3h10.025a.926.926 0 0 0 .7-.288A.99.99 0 0 0 18 10a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 9H6.975a.928.928 0 0 0-.7.287A.993.993 0 0 0 6 10c0 .283.096.52.287.712.192.192.43.288.713.288Zm0-3h10.025a.928.928 0 0 0 .7-.287A.993.993 0 0 0 18 7a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 6H6.975a.928.928 0 0 0-.7.287A.993.993 0 0 0 6 7a.97.97 0 0 0 .287.713A.97.97 0 0 0 7 8ZM2 19.575V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 2h16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 18H6l-2.3 2.3c-.317.317-.68.387-1.088.212-.408-.175-.612-.487-.612-.937Z"
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

export default withTheme(ChatFilled);
