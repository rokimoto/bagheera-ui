import React, { MouseEvent, KeyboardEvent } from 'react';
import icons from '@/icons';
// Components
import Spinner from '@/components/Spinner';
// Helpers
import { IconProps } from '@/icons';
// Types
import { ButtonProps } from './Button.d';
// Style
import S, {
  disabledContentColor,
  contentColor as defaultContentColor,
} from './style';

const Button = ({
  text,
  type,
  disabled = false,
  onClick,
  width,
  loading = false,
  icon,
  size,
  title,
  selected = false,
}: ButtonProps) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (!onClick) {
      return null;
    }
    return onClick(e);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled && !loading && onClick) {
      return onClick();
    }
  };

  const getSpinnerType = () => {
    if (
      type === 'primary inverse' ||
      type === 'secondary inverse' ||
      type === 'tertiary inverse'
    ) {
      return 'inverse';
    } else {
      return 'default';
    }
  };

  const getContent = () => {
    const Icon: React.FC<IconProps> | null = icon ? icons[icon as keyof typeof icons] : null;
    return (
      <S.ButtonWrapper
        width={width}
        $type={type}
        disabled={disabled || loading}
        $selected={selected}
      >
        <S.Button
          disabled={disabled || loading}
          $isLoading={loading}
          $size={size}
          $type={type}
          width={width}
        >
          <S.TextWrapper>
            {Icon && (
              <S.Icon>
                <Icon
                  contentColor={
                    disabled
                      ? disabledContentColor[type]
                      : defaultContentColor[type]
                  }
                  size={size === 'small' ? 20 : 24}
                />
              </S.Icon>
            )}
            <S.Text
              $type={type}
              disabled={disabled || loading}
              $isLoading={loading}
              $size={size}
            >
              {text}
            </S.Text>
            {loading && (
              <S.LoaderWrapper>
                <Spinner size="small" type={getSpinnerType()} />
              </S.LoaderWrapper>
            )}
          </S.TextWrapper>
        </S.Button>
      </S.ButtonWrapper>
    );
  };

  return (
    <S.ButtonWrapperOuter
      width={width}
      onKeyDown={handleKeyDown}
      title={title}
      onClick={disabled || loading ? undefined : handleClick}
      disabled={disabled || loading}
    >
      {getContent()}
    </S.ButtonWrapperOuter>
  );
};

export default Button;
