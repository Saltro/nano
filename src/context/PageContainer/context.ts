import { createContext } from 'react';

interface IPageContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (pages: number) => void;
}

const PageContext = createContext<IPageContext | null>(null);

export default PageContext;
