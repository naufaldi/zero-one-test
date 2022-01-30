import React, { FC } from 'react';
import clsxm from '../lib/clsxm';

export type GridProps = {
  className?: string;
  children: React.ReactNode;
};
export const Grid: FC<GridProps> = ({ children, className }) => {
  return (
    <div className={clsxm('grid grid-cols-12 ', className)}>{children}</div>
  );
};

export default Grid;
