'use client';

import React, { useState, useEffect } from 'react';
import { useSearch } from '@/shared/store/store';

interface Props {
    className?: string;
}

export const Search: React.FC<Props> = ({ className }) => {
    const { searchTerm, updateSearchTerm } = useSearch((state) => state);
    const [inputValue, setInputValue] = useState(searchTerm);

    console.log('searchTerm', searchTerm)

    useEffect(() => {
        const handler = setTimeout(() => {
            updateSearchTerm(inputValue);
        }, 700);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, updateSearchTerm]);

    useEffect(() => {
        setInputValue(searchTerm);
    }, [searchTerm]);

    return (
        <div className={`relative w-full max-w-xl ${className}`}>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Search breed by name..."
                className={`
          w-full h-14 pl-12 pr-4 rounded-2xl shadow-lg transition-all duration-300
          bg-gray-900 text-white placeholder-gray-400 border border-transparent focus:outline-none
          focus:ring-2 focus:ring-primary focus:border-primary
        `}
            />
            <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
                />
            </svg>
        </div>
    );
};

