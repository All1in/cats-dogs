import clsx from 'clsx';
import React from 'react';
import { Wrapper } from '@/shared/components/Wrapper';
import Link from 'next/link';
import { Search } from '@/shared/components/Search';

interface Props {
  className?: string;
  search?: boolean;
}

export const Header: React.FC<Props> = ({ className, search = true }) => {
  return (
    <header className={clsx(className, 'py-4 px-2 sm:py-5 sm:px-3')}>
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link href={'/'}>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b-4 border-yellow-400 pb-2 inline-block">
              Cats & Dogs
            </h1>
          </Link>
        {search && <Search />}
        </div>
      </Wrapper>
    </header>
  );
};
