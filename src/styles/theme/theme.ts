import 'styled-components';
import { assign } from 'lodash';
import {
  elevation,
  spacing,
  borderRadius,
  borderWidth,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  typeface,
  opacity,
} from '@/styles/bagheera/theme-core';

import { margin, sizing } from '@/styles/theme/theme-custom';

import { color } from '@/styles/bagheera/theme-core-color';

import {
  actionColor,
  backgroundColor,
  borderColor,
  contentColor,
  focusColor,
} from '@/styles/bagheera/theme-light';

import { tag } from '@/styles/bagheera/theme-light-tag';

const theme = assign(
  { color },
  { actionColor },
  { backgroundColor },
  { contentColor },
  { borderColor },
  { focusColor },
  { elevation },
  { spacing },
  { margin },
  { borderRadius },
  { borderWidth },
  { typeface },
  { fontSize },
  { lineHeight },
  { fontWeight },
  { letterSpacing },
  { sizing },
  { opacity },
  { tag },
);

export { theme };
