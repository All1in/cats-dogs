'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from './Card'
import { useSearch } from '@/shared/store/store'
import { filteredCards } from '../utils/filteredCards'

interface Props {
    className?: string;
    items: any[];
}

export const List: React.FC<Props> = ({ items }) => {
    const { searchTerm } = useSearch((state) => state);
    const filteredBreeds = filteredCards(items, searchTerm);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start px-4">
            {filteredBreeds.map((item: any) => {
                const breed = item.breeds[0];

                return (
                    <Link
                        key={item.id}
                        href={breed.dog_friendly ? `/cats/${breed.id}` : `/dogs/${breed.id}`}
                        className="h-full"
                    >
                        <Card
                            isDog={!breed.dog_friendly}
                            title={breed.name}
                            name={breed.name}
                            origin={breed.origin}
                            temperament={breed.temperament}
                            imageUrl={item.url}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
