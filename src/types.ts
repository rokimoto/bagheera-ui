import { DefaultThemeProps } from '@/styles/theme/theme-def.d';

export type Hex = `#${string}`;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BagheeraComponent<P, N = React.HTMLAttributes<any>> = {
  /**
   * The root element.
   */
  as?: React.ElementType;
  /**
   * The content
   */
  children?: React.ReactNode;
} & P &
  Omit<N, keyof P>;

export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'lightning'
  | 'primary inverse'
  | 'secondary inverse'
  | 'tertiary inverse'
  | 'negative';

export type ContentColors = keyof DefaultThemeProps['contentColor'];
export type ActionColors = keyof DefaultThemeProps['actionColor'];
export type BackgroundColors = keyof DefaultThemeProps['backgroundColor'];
type TagTypes = keyof DefaultThemeProps['tag'];
export type TagColors = Exclude<
  TagTypes,
  'removable' | 'specialLive' | 'specialNew'
>;
