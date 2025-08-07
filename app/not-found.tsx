import React from 'react';
import clsx from 'clsx';
import { Wrapper } from '@/shared/components/Wrapper';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
      <Wrapper>
        <section
            className={clsx(
                'min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-black',
                'font-sans px-6 text-center text-white'
            )}
        >
          <div className="max-w-lg">
            <h1
                className={clsx(
                    'text-[12rem] font-extrabold select-none tracking-wide',
                    'drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]',
                    'animate-pulse'
                )}
            >
              404
            </h1>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-wide">
              Oops! Page Not Found
            </h2>

            <p className="text-lg md:text-xl mb-10 text-indigo-300">
              We can’t find the page you’re looking for. It might have been moved or deleted.
            </p>

            <Link
                href="/"
                className={clsx(
                    'inline-block bg-gradient-to-r from-pink-600 to-purple-600',
                    'hover:from-pink-700 hover:to-purple-700',
                    'text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300',
                    'transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50'
                )}
            >
              Return Home
            </Link>
          </div>
        </section>
      </Wrapper>
  );
};

export default NotFoundPage;
