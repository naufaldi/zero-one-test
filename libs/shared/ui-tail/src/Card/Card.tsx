import React, { FC } from 'react';
import clsxm from '../lib/clsxm';

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsxm(
        'shadow-md rounded-lg px-6 sm:px-12 py-6 sm:py-8 w-full bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
