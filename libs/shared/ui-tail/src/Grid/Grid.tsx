import React, { FC } from 'react';
import clsxm from '../lib/clsxm';

export const Grid: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsxm('grid grid-cols-12 ', className)}>{children}</div>
  );
};

export default Grid;