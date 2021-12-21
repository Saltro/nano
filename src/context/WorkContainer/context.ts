import { createContext } from 'react';

interface IWorkContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (page: number) => void;
  orderingKey: AnimeOrderingKey;
  setOrderingKey: (orderingKey: AnimeOrderingKey) => void;
  ascending: boolean;
  setAscending: (ascending: boolean) => void;
  search: string;
  setSearch: (searchKey: string) => void;
}

const WorkContext = createContext<IWorkContext>({
  currentPage: 0,
  setCurrentPage: () => {},
  totalPages: 0,
  setTotalPages: () => {},
  orderingKey: 'id',
  setOrderingKey: () => {},
  ascending: true,
  setAscending: () => {},
  search: '',
  setSearch: () => {},
});

export default WorkContext;
