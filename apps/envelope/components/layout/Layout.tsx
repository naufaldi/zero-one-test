import React, { FC } from 'react';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
