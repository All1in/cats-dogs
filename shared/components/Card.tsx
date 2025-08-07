'use client'

import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

interface Props {
    imageUrl: string;
    title: string;
    isDog: boolean;
    className?: string;
    temperament: string;
    origin: string;
    name: string;
}

export const Card: React.FC<Props> = ({
  title,
  imageUrl,
  isDog,
  className,
  origin,
  temperament,
  name,
}) => {
    return (
        <div
            className={clsx(
                className,
                'relative bg-white dark:bg-gray-800 shadow-md rounded-xl px-6 py-8 text-center transition-all duration-300 hover:shadow-lg',
                isDog ? 'border-l-4 border-yellow-400' : 'border-l-4 border-blue-400',
                'h-full flex flex-col'
            )}
        >
            {origin && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {origin}
                </div>
            )}

            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                    <Image
                        src={imageUrl}
                        width={96}
                        height={96}
                        alt={title || ''}
                        className="object-cover w-full h-full"
                        placeholder="blur"
                        blurDataURL={isDog ? "/images/doggie.jpg" : "/images/cat.jpg"}
                    />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {name}
                </h3>

                <p
                    className={clsx(
                        'text-sm font-medium mb-3',
                        isDog ? 'text-yellow-600' : 'text-blue-600'
                    )}
                >
                    {title}
                </p>
            </div>

            <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-sm text-gray-700 dark:text-gray-200 w-full">
                {temperament}
            </div>
        </div>
    );
};
