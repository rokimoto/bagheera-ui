import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Random = ({
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
      d="M7.5 18c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 7.5 15c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 6 16.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm0-9c.417 0 .77-.146 1.063-.438C8.854 8.271 9 7.918 9 7.5c0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 7.5 6c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 6 7.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm4.5 4.5c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 12 10.5c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 10.5 12c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm4.5 4.5c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 16.5 15c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 15 16.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm0-9c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.447 1.447 0 0 0 16.5 6c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 15 7.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437ZM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587C20.803 3.98 21 4.45 21 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 19 21H5Zm0-2h14V5H5v14Z"
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

export default withTheme(Random);
