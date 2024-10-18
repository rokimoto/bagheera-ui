import { DefaultTheme } from 'styled-components';

interface FocusProps {
  theme: DefaultTheme;
  disabled?: boolean;
  condensed?: boolean;
  borderRadius?: string;
}

export const focusStyles = ({
  theme,
  disabled = false,
  condensed = false,
  borderRadius,
}: FocusProps) => {
  if (disabled) return '';
  const borderPos = condensed
    ? theme.borderWidth['2']
    : `-${theme.borderWidth['2']}`;
  return `
    position: absolute;
    top: ${borderPos};
    left: ${borderPos};
    right: ${borderPos};
    bottom: ${borderPos};
    border: ${theme.borderWidth['2']} solid ${theme.backgroundColor.white};
    box-shadow: 0px 0px 0px ${theme.borderWidth['2']} ${
    theme.actionColor.brand
  };
    ${borderRadius ? `border-radius: ${borderRadius};` : ''}
    content: '';
  `;
};

export const focus = ({
  theme,
  disabled = false,
  condensed,
  borderRadius,
}: FocusProps) => {
  if (disabled) return '';
  return `
    &:focus {
      outline: none;
      &:before {
        ${focusStyles({ theme, disabled, condensed, borderRadius })}
      }
    }

  `;
};

interface HoverAndActiveProps {
  backgroundColor: string;
  disabled?: boolean;
  borderRadius?: string;
}

const hoverAndActiveState = (borderRadius?: string) => `
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    z-index: 1;
    ${borderRadius ? `border-radius: ${borderRadius};` : ''}
    transition: background-color .15s ease-in-out;
    pointer-events: none;
  }
`;

export const hover = ({
  backgroundColor,
  disabled = false,
  borderRadius,
}: HoverAndActiveProps) => {
  if (disabled) return '';
  return `
    ${hoverAndActiveState(borderRadius)}
    &:hover {
      &:after {
        background-color: ${backgroundColor};
      }
    }
  `;
};

export const active = ({
  backgroundColor,
  disabled = false,
  borderRadius,
}: HoverAndActiveProps) => {
  if (disabled) return '';
  return `
   ${hoverAndActiveState(borderRadius)}
    &:active {
      &:after {
        background-color: ${backgroundColor};
      }
    }
  `;
};

interface SelectedProps {
  theme: DefaultTheme;
  disabled?: boolean;
  borderRadius?: string;
}

export const selected = ({
  theme,
  disabled = false,
  borderRadius,
}: SelectedProps) => {
  if (disabled) return '';
  return `
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      z-index: 1;
      ${borderRadius ? `border-radius: ${borderRadius};` : ''}
      background-color: ${theme.actionColor.selected};
      pointer-events: none;
    }
  `;
};

export const getInputBorder = (
  isFocused: boolean,
  error: boolean,
  disabled: boolean,
  theme: DefaultTheme,
) => {
  if (disabled) {
    return `${theme.borderWidth[1]} solid ${theme.borderColor.subdued}`;
  } else if (error && isFocused) {
    return `${theme.borderWidth[2]} solid ${theme.borderColor.negative}`;
  } else if (error) {
    return `${theme.borderWidth[1]} solid ${theme.borderColor.negative}`;
  } else if (isFocused) {
    return `${theme.borderWidth[2]} solid ${theme.borderColor.primary}`;
  } else {
    return `${theme.borderWidth[1]} solid ${theme.borderColor.default}`;
  }
};
