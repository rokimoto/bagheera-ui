import styled, { keyframes } from 'styled-components';

import { boundingDimensions } from './Spinner';
import { Sizes } from './Spinner.d';

const S: Record<string, React.ElementType> = {};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

S.Spinner = styled.div(
  (props: { $size: Sizes }) => `
  height: ${boundingDimensions[props.$size]}px;
  width: ${boundingDimensions[props.$size]}px;
`,
);

S.Svg = styled.svg`
  animation: ${rotate} 0.8s ease-out infinite;
`;

export default S;
