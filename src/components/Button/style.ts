import styled, { css } from 'styled-components';
import { hover, active, selected } from '@/helpers/style';
// Helpers
import { ButtonProps, Sizes, AltTertiaryContentColors } from './Button.d';
import { ButtonTypes, ContentColors, ActionColors } from '@/types';
import Ag from '@/styles/typography';

type StyledOuterWrapperProps = {
  width?: string;
  disabled: boolean;
};

type StyledIconProps = {
  $size: Sizes;
};

type StyledWrapperProps = {
  width?: string;
  $selected: boolean;
  $type: ButtonTypes;
  disabled: boolean;
};

type StyledButtonProps = {
  width?: string;
  $type: ButtonTypes;
  disabled: boolean;
  $isLoading: boolean;
  $size: Sizes;
};

type StyledTextProps = {
  $type: ButtonTypes;
  disabled: boolean;
  $isLoading: boolean;
  $size: Sizes;
};

type ColorProps = Pick<StyledButtonProps, '$type'>;

type MappedActionColor = Record<ButtonProps['type'], ActionColors>;

export const hoverColor: MappedActionColor = {
  primary: 'inverseHover',
  'primary inverse': 'hover',
  secondary: 'hover',
  'secondary inverse': 'inverseHover',
  tertiary: 'hover',
  'tertiary inverse': 'inverseHover',
  lightning: 'hover',
  negative: 'inverseHover',
};

export const pressedColor: MappedActionColor = {
  primary: 'inversePressed',
  'primary inverse': 'pressed',
  secondary: 'pressed',
  'secondary inverse': 'inversePressed',
  tertiary: 'pressed',
  'tertiary inverse': 'inversePressed',
  lightning: 'pressed',
  negative: 'inversePressed',
};

type MappedContentColor = Record<ButtonProps['type'], ContentColors>;

export const disabledContentColor: MappedContentColor = {
  primary: 'disabled',
  'primary inverse': 'inverseDisabled',
  secondary: 'disabled',
  'secondary inverse': 'inverseDisabled',
  tertiary: 'disabled',
  'tertiary inverse': 'inverseDisabled',
  lightning: 'inverseDisabled',
  negative: 'inverseDisabled',
};

export const contentColor: MappedContentColor = {
  primary: 'inverse',
  'primary inverse': 'default',
  secondary: 'default',
  'secondary inverse': 'inverse',
  tertiary: 'accent',
  'tertiary inverse': 'inverse',
  lightning: 'inverse',
  negative: 'inverse',
};

export const disabledTextColor = css<ColorProps>`
  ${({ theme, $type }) => theme.contentColor[disabledContentColor[$type]]}
`;

export const textColor = css<ColorProps>`
  ${({ theme, $type }) => theme.contentColor[contentColor[$type]]}
`;

export const disabledBackgroundColor = css<ColorProps>`
  ${({ theme, $type }) => {
    switch ($type) {
      case 'primary':
        return theme.backgroundColor.disabled;
      case 'primary inverse':
        return theme.backgroundColor.inverseDisabled;
      case 'secondary':
        return theme.backgroundColor.disabled;
      case 'secondary inverse':
        return theme.backgroundColor.inverseDisabled;
      case 'tertiary':
        return theme.backgroundColor.transparent;
      case 'tertiary inverse':
        return theme.backgroundColor.transparent;
      case 'lightning':
        return theme.backgroundColor.disabled;
      case 'negative':
        return theme.backgroundColor.disabled;
    }
  }};
`;

export const backgroundColor = css<ColorProps>`
  ${({ theme, $type }) => {
    switch ($type) {
      case 'primary':
        return theme.backgroundColor.inversePrimary;
      case 'primary inverse':
        return theme.backgroundColor.primary;
      case 'secondary':
        return theme.backgroundColor.tertiary;
      case 'secondary inverse':
        return theme.backgroundColor.inverseSecondary;
      case 'tertiary':
        return theme.backgroundColor.transparent;
      case 'tertiary inverse':
        return theme.backgroundColor.transparent;
      case 'lightning':
        return theme.actionColor.brand;
      case 'negative':
        return theme.backgroundColor.negative;
    }
  }};
`;

const S = {
  // Needed in case the button is inside of a column flex and width is auto
  // Otherwise S.ButtonWrapper by itself will take up the whole width of it's parent and make the focus outline extend that far too
  ButtonWrapperOuter: styled.button<StyledOuterWrapperProps>`
    width: ${({ width }) => width ?? 'auto'};
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    appearance: none;
    padding: 0;
    background: none;
    border: none;

    &:focus {
      outline: none;
    }

    &::selection {
      background: none;
    }
  `,

  ButtonWrapper: styled.div<StyledWrapperProps>`
    display: inline-flex;
    position: relative;
    width: ${({ width }) => width ?? 'auto'};
    border-radius: 100px;
    background-color: ${({ disabled }) =>
      disabled ? disabledBackgroundColor : backgroundColor};

    ${({ theme, $type, disabled }) =>
      hover({
        backgroundColor: theme.actionColor[hoverColor[$type]],
        disabled: disabled,
        borderRadius: '100px',
      })}

    ${({ $selected, theme, $type, disabled }) => {
      return !$selected
        ? active({
            backgroundColor: theme.actionColor[pressedColor[$type]],
            disabled: disabled,
            borderRadius: '100px',
          })
        : '';
    }}

  ${({ $selected, theme, disabled }) =>
      $selected
        ? selected({
            theme: theme,
            disabled: disabled,
            borderRadius: '100px',
          })
        : ''}
  `,

  Button: styled.div<StyledButtonProps>`
    width: ${({ width }) => width || 'auto'};
    min-width: ${({ $size }) => {
      // min-width = button height * 2
      switch ($size) {
        case 'small':
          return `${32 * 2}px`;
        case 'medium':
          return `${48 * 2}px`;
        case 'large':
          return `${56 * 2}px`;
        default:
          return 'none';
      }
    }};
    padding: ${({ $size, theme }) => {
      switch ($size) {
        case 'small':
          return `6px ${theme.spacing.MD}`;
        case 'medium':
          return `${theme.spacing.SM} ${theme.spacing.LG}`;
        case 'large':
          return `${theme.spacing.MD} ${theme.spacing.XL}`;
      }
    }};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
  `,

  TextWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `,

  Icon: styled.div`
    margin-right: ${(props) => props.theme.spacing.XS};
    display: flex;
  `,

  Text: styled.div<StyledTextProps>`
    ${({ $size }) => ($size === 'small' ? Ag.ButtonLabelSM : Ag.ButtonLabelMD)};
    color: ${({ disabled, theme }) => {
      if (disabled) return disabledTextColor;
      return textColor;
    }};
    opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
    white-space: nowrap;
  `,

  LoaderWrapper: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default S;
