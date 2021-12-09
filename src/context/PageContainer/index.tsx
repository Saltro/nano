import React, { useMemo } from 'react';
import PageContext from './context';

const PageContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);

  const value = useMemo(() => {
    return {
      currentPage,
      totalPages,
      setCurrentPage,
      setTotalPages,
    };
  }, [currentPage]);

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

const usePage = () => {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageContainer');
  }
  return context;
};

export default PageContainer;
export { usePage };
