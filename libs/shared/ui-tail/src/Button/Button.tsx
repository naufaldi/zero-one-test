import * as React from 'react';

import clsxm from '../lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
}

enum ButtonSize {
  'small',
  'medium',
  'large',
}

type ButtonProps = {
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  type?: string;
} & React.ComponentPropsWithRef<'button'>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled: buttonDisabled,
  variant = 'primary',
  size = 'medium',
  isDarkBg = false,
  type = 'button',
  ...rest
}) => {
  const disabled = buttonDisabled;

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsxm(
        'inline-flex items-center rounded-lg  font-semibold',
        'focus:outline-none focus-visible:ring focus-visible:ring-blue-500',
        'shadow-sm',
        'transition-colors duration-75',
        //#region  //*=========== Variants ===========
        [
          variant === 'primary' && [
            'bg-blue-500 text-white',
            'border border-blue-500',
            'hover:bg-blue-600 hover:text-white',
            'active:bg-blue-500',
            'disabled:bg-blue-400 disabled:hover:bg-blue-400',
          ],
          variant === 'outline' && [
            'text-white',
            'border border-white-500',
            'hover:bg-white active:bg-white hover:text-blue-500 disabled:bg-white',
            isDarkBg &&
              'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
          ],
        ],
        //#endregion  //*======== Variants ===========
        [size === 'medium' && 'px-4 py-2', size === 'large' && 'px-8 py-3'],
        'disabled:cursor-not-allowed',

        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
