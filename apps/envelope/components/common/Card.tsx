import React, { FC } from 'react';
import clsxm from '../../lib/clsxm';
const Card: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsxm(
        'shadow-md rounded-lg px-12 py-8 w-full bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
