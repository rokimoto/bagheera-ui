import { DefaultTheme } from 'styled-components';

export type Sizes = 'small' | 'large';
export type Types = 'default' | 'inverse';

export interface SpinnerProps {
  size: Sizes;
  type?: Types;
  theme: DefaultTheme;
}