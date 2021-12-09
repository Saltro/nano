import { createContext } from 'react';
import { IWorkInfo } from '@/context/WorkContainer/index';

interface IWorkContext {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  typeId: number;
  setTypeId: (id: number) => void;
  workList: IWorkInfo[];
}

const WorkContext = createContext<IWorkContext | null>(null);

export default WorkContext;
