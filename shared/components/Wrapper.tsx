import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(className, 'max-w-[1440px] mx-auto')}>{children}</div>
  );
};
