import { createContext } from 'react';
import { IWorkInfo } from '@/context/WorkContainer/index';

interface IWorkContext {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  typeId: number;
  setTypeId: (id: number) => void;
  itemList: IWorkInfo[];
  searchKey: string;
  setSearchKey: (searchKey: string) => void;
}

const WorkContext = createContext<IWorkContext>({
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => {},
  typeId: 0,
  setTypeId: () => {},
  itemList: [],
  searchKey: '',
  setSearchKey: () => {},
});

export default WorkContext;
