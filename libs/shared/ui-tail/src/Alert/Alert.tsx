import clsxm from '@zero-one/apps/lib/clsxm';
import React, { FC } from 'react';

enum AlertVariant {
  'success',
  'error',
}
type AlertProps = {
  variant: keyof typeof AlertVariant;
  className?: string;
  title: string;
};

export const Alert: FC<AlertProps> = ({
  variant,
  title,
  children,
  className,
}) => {
  return (
    <div
      className={clsxm(
        'p-4 mb-4 text-sm  rounded-lg relative',
        [
          variant === 'success' && 'text-green-700 bg-green-100',
          variant === 'error' && 'text-red-700 bg-red-100',
        ],
        className
      )}
      role="alert"
    >
      <span className="font-bold capitalize">{title}</span> {children}
    </div>
  );
};

export default Alert;
