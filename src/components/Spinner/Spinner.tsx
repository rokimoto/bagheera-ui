import React from 'react';
import { withTheme } from 'styled-components';
// Types
import { SpinnerProps } from './Spinner.d';
// Style
import S from './style';


export const boundingDimensions = {
  small: 24,
  large: 48,
};

const spinnerDimensions = {
  small: 20,
  large: 40,
};

const strokeWidths = {
  small: 2,
  large: 4,
};

const Spinner = ({ size, type = 'default', theme }: SpinnerProps) => {
  const trackColors = {
    default: theme.backgroundColor.tertiary,
    inverse: theme.backgroundColor.white,
  };

  const fillColors = {
    default: theme.actionColor.brand,
    inverse: theme.backgroundColor.white,
  };

  const strokeWidth = strokeWidths[size];
  const spinnerDimension = spinnerDimensions[size];
  const boundingDimension = boundingDimensions[size];
  const radius = spinnerDimension / 2;
  const circumference = radius * 2 * Math.PI;

  const trackColor = trackColors[type];
  const fillColor = fillColors[type];

  return (
    <S.Spinner $size={size}>
      <S.Svg height={boundingDimension} width={boundingDimension}>
        <circle
          strokeWidth={strokeWidth}
          stroke={trackColor}
          fill="transparent"
          r={radius}
          cx={spinnerDimension / 2 + strokeWidth}
          cy={spinnerDimension / 2 + strokeWidth}
          opacity={type === 'inverse' ? 0.16 : 1}
        />
        <circle
          strokeWidth={strokeWidth}
          stroke={fillColor}
          fill="transparent"
          r={radius}
          cx={spinnerDimension / 2 + strokeWidth}
          cy={spinnerDimension / 2 + strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - 0.25 * circumference}
        />
      </S.Svg>
    </S.Spinner>
  );
};

export default withTheme(Spinner) as React.ComponentType<Omit<SpinnerProps, 'theme'>>;
