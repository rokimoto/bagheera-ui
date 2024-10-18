import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';
import { uniqueId } from 'lodash';

const RemixBrand = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => {
  const gradientId = uniqueId();
  const gradientId2 = uniqueId();
  const gradientId3 = uniqueId();
  return (
    <svg
      viewBox="0 0 130.48 130.48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <defs>
        <linearGradient
          id={`linear-gradient-${gradientId}`}
          x1="65.24"
          y1="147.5"
          x2="65.24"
          y2="49.93"
          gradientTransform="translate(0 162.41) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff00fd" />
          <stop offset=".19" stopColor="#ff00fb" />
          <stop offset=".26" stopColor="#ff02f4" />
          <stop offset=".31" stopColor="#ff06e8" />
          <stop offset=".34" stopColor="#ff0bd7" />
          <stop offset=".38" stopColor="#ff12c1" />
          <stop offset=".41" stopColor="#ff1ba6" />
          <stop offset=".44" stopColor="#ff2585" />
          <stop offset=".46" stopColor="#ff3160" />
          <stop offset=".48" stopColor="#ff3f35" />
          <stop offset=".5" stopColor="#ff4d07" />
          <stop offset=".51" stopColor="#ff5001" />
          <stop offset=".51" stopColor="#f75109" />
          <stop offset=".53" stopColor="#cc5837" />
          <stop offset=".55" stopColor="#a35e62" />
          <stop offset=".58" stopColor="#806487" />
          <stop offset=".6" stopColor="#6169a8" />
          <stop offset=".63" stopColor="#476dc3" />
          <stop offset=".66" stopColor="#3370d9" />
          <stop offset=".7" stopColor="#2372ea" />
          <stop offset=".75" stopColor="#1874f6" />
          <stop offset=".81" stopColor="#1175fd" />
          <stop offset="1" stopColor="#1076ff" />
        </linearGradient>

        <linearGradient
          id={`linear-gradient-${gradientId3}`}
          x1="95.79"
          y1="-25.29"
          x2="95.86"
          y2="-65.02"
          gradientTransform="translate(140.24 37.3) rotate(-180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".12" stopColor="#000" />
          <stop offset=".85" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-${gradientId2}`}
          x1="130.12"
          y1="-127.03"
          x2="130.2"
          y2="-172.55"
          gradientTransform="translate(-44.11 195.01)"
          xlinkHref={`#linear-gradient-${gradientId3}`}
        />
      </defs>
      <path
        d="m88.05,65.1v.18s18.81,12.1,18.81,28.61l.02,5h12.8s-24.05,31.59-24.05,31.59l-24.05-31.59h13.36s-.02-4.89-.02-4.89h0c0-.36-.09-.78-.25-1.24-1.75-4.9-10.78-11.26-19.4-15.43-2.42,1.18-5.87,2.99-9.29,5.27-7.71,5.13-10.44,9.31-10.44,11.33,0,3.08.02,4.89.02,4.89h13.36s-24.05,31.59-24.05,31.59l-24.05-31.59h12.8s.03-1.81-.02-4.89c-.26-17.02,18.9-28.72,18.9-28.72v-.06s0-.09,0-.09v-.06s-19.16-11.7-18.9-28.72c.05-3.08,0-4.64,0-4.64h-12.8S34.85.06,34.85.06l24.05,31.59h-13.36v4.64c0,2.02,2.73,6.2,10.44,11.33,3.42,2.28,6.87,4.1,9.29,5.27,8.62-4.17,17.65-10.53,19.4-15.43.16-.45.24-.87.25-1.24h0s0-4.64,0-4.64h-13.36S95.61,0,95.61,0l24.05,31.59h-12.8s0,4.75,0,4.75c0,16.51-18.81,28.61-18.81,28.61v.18s0-.04,0-.04Z"
        fill={
          isHex(contentColor)
            ? contentColor
            : contentColor === 'brand-gradient'
            ? `url(#linear-gradient-${gradientId})`
            : theme.contentColor[contentColor]
        }
      />
      <path
        d="m65.21,52.85c8.75-4.27,19.43-11.16,19.69-16.86,0,0,.02-3.45.02-5.15s-.02-5.48-.02-5.48h21.94s.01,8.23.01,8.23c.68,12.59-5.75,21-15.82,29.27l-3.13,2.29"
        fill={`url(#linear-gradient-${gradientId2})`}
        opacity="0.4"
      />
      <path
        d="m65.25,77.37c-8.75,4.27-19.43,11.16-19.69,16.86,0,0-.02,3.45-.02,5.15s.04-1.96.04-1.96h-21.94l-.03-.79c-.68-12.59,5.75-21,15.82-29.27l3.13-2.29"
        fill={`url(#linear-gradient-${gradientId3})`}
        opacity="0.4"
      />
    </svg>
  );
};

export default withTheme(RemixBrand);
