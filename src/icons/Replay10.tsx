import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Replay10 = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.963 19.7C7.654 21.233 9.667 22 12 22c1.25 0 2.421-.237 3.513-.712a9.156 9.156 0 0 0 2.85-1.926 9.151 9.151 0 0 0 1.925-2.85A8.708 8.708 0 0 0 21 13c0-1.25-.237-2.421-.712-3.513a9.167 9.167 0 0 0-1.925-2.85 9.151 9.151 0 0 0-2.85-1.924A8.705 8.705 0 0 0 12 4h-.15l.875-.875a.948.948 0 0 0 .275-.7c0-.283-.091-.525-.275-.725A1.035 1.035 0 0 0 12 1.425a.948.948 0 0 0-.7.275L8.7 4.3c-.1.1-.17.208-.212.325A1.099 1.099 0 0 0 8.425 5c0 .133.021.258.063.375A.872.872 0 0 0 8.7 5.7l2.6 2.575c.183.2.417.3.7.3.284 0 .525-.1.725-.3a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7L11.85 6H12c1.95 0 3.604.679 4.962 2.037C18.321 9.396 19 11.05 19 13c0 1.95-.68 3.604-2.038 4.962C15.604 19.321 13.95 20 12 20c-1.783 0-3.325-.57-4.625-1.712-1.3-1.142-2.067-2.571-2.3-4.288a1.118 1.118 0 0 0-.362-.713A1.026 1.026 0 0 0 4 13c-.283 0-.52.1-.712.3a.82.82 0 0 0-.238.7c.25 2.267 1.221 4.167 2.913 5.7Zm9.207-5.46c0 .32-.03.6-.1.82-.07.22-.17.42-.29.57-.12.15-.28.26-.45.33-.17.07-.37.1-.59.1-.22 0-.41-.03-.59-.1s-.33-.18-.46-.33c-.13-.15-.23-.34-.3-.57-.07-.23-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82.07-.22.17-.42.29-.57.12-.15.28-.26.45-.33.17-.07.37-.1.59-.1.22 0 .41.03.59.1s.33.18.46.33c.13.15.23.34.3.57.07.23.11.5.11.82v.74Zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31a.389.389 0 0 0-.19-.17.655.655 0 0 0-.5 0c-.07.03-.14.09-.19.17-.05.08-.09.18-.12.31s-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32c.05.08.11.14.19.17s.16.05.25.05.18-.02.25-.05c.07-.03.14-.09.19-.17.05-.08.09-.19.11-.32.02-.13.04-.29.04-.48v-.97h.01ZM10.89 16h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16Z"
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

export default withTheme(Replay10);
