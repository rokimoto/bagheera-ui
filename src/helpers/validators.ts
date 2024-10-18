import { Hex } from '@/types';

export const isHex = (value: string): value is Hex => {
  return value.indexOf('#') === 0;
};
