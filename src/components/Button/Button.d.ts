import { ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react';
import { BagheeraComponent } from '@/types';
import { ButtonTypes, ContentColors } from '@/types';
import { IconNames } from '@/icons';

export type Sizes = 'small' | 'medium' | 'large';

export type AltTertiaryContentColors = Extract<ContentColors, 'negative'>;

interface CustomProps {
  text: string | ReactNode;
  type: ButtonTypes;
  size: Sizes;
  disabled?: boolean;
  onClick?: (e?: MouseEvent) => void;
  width?: string;
  loading?: boolean;
  selected?: boolean;
  icon?: IconNames;
}

export type ButtonProps = BagheeraComponent<
  CustomProps,
  ButtonHTMLAttributes<HTMLButtonElement>
>;
