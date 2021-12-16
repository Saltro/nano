import { createContext } from 'react';

interface IWorkContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (page: number) => void;
  typeId: number;
  setTypeId: (id: number) => void;
  searchKey: string;
  setSearchKey: (searchKey: string) => void;
}

const WorkContext = createContext<IWorkContext>({
  currentPage: 0,
  setCurrentPage: () => {},
  totalPages: 0,
  setTotalPages: () => {},
  typeId: 0,
  setTypeId: () => {},
  searchKey: '',
  setSearchKey: () => {},
});

export default WorkContext;
