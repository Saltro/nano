import React, { useMemo } from 'react';
import WorkContext from './context';

const WorkContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [orderingKey, setOrderingKey] = React.useState<AnimeOrderingKey>('id');
  const [ascending, setAscending] = React.useState(true);
  const [search, setSearch] = React.useState<string>('');

  const handleOrderingKeyChange = (orderingKey: AnimeOrderingKey) => {
    setOrderingKey(orderingKey);
    setCurrentPage(1);
  };

  const value = useMemo(() => {
    return {
      currentPage,
      setCurrentPage,
      totalPages,
      setTotalPages,
      orderingKey,
      setOrderingKey: handleOrderingKeyChange,
      ascending,
      setAscending,
      search,
      setSearch,
    };
  }, [currentPage, totalPages, orderingKey, search]);

  return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
};

const useWorkContext = () => {
  const context = React.useContext(WorkContext);
  if (context === undefined) {
    throw new Error('useWorkContext must be used within a WorkContainer');
  }
  return context;
};

export default WorkContainer;
export { useWorkContext };
