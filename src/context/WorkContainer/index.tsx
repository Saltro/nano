import React, { useMemo } from 'react';
import WorkContext from './context';

const WorkContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [typeId, setTypeId] = React.useState<number>(0);
  const [searchKey, setSearchKey] = React.useState<string>('');

  const handleTypeIdChange = (typeId: number) => {
    setTypeId(typeId);
    setCurrentPage(1);
  };

  const value = useMemo(() => {
    return {
      currentPage,
      setCurrentPage,
      totalPages,
      setTotalPages,
      typeId,
      setTypeId: handleTypeIdChange,
      searchKey,
      setSearchKey,
    };
  }, [currentPage, totalPages, typeId, searchKey]);

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
