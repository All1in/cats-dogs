import { create } from 'zustand';

interface SearchState  {
  searchTerm: string;
  updateSearchTerm: (term: string) => void;
}

export const useSearch = create<SearchState>((set) => ({
  searchTerm: '',
  updateSearchTerm: (term: string) => set({ searchTerm: term}),
}));
