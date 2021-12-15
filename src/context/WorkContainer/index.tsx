import React, { useEffect, useMemo } from 'react';
import WorkContext from './context';
import Request from '@/request';

export interface IWorkInfo {
  id: number;
  title_cn: string;
  cover_medium: string;
  is_collected: boolean;
}

const WorkContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [typeId, setTypeId] = React.useState<number>(1);
  const [itemList, setItemList] = React.useState<IWorkInfo[]>([]);
  const [searchKey, setSearchKey] = React.useState<string>('');

  useEffect(() => {
    Request.getWorkList(typeId, currentPage, searchKey)
      .then((res) => {
        console.log('获取WorkList成功', res);
        setTotalPages(Math.ceil(res.count / 20));
        setItemList(res.results);
      })
      .catch((err) => {
        console.log('获取WorkList失败', err);
      });
  }, [typeId, currentPage]);

  const handleTypeIdChange = (id: number) => {
    setTypeId(id);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log({ currentPage: currentPage, totalPages: totalPages, typeId: typeId });
  });

  const value = useMemo(() => {
    return {
      currentPage,
      totalPages,
      setCurrentPage,
      typeId,
      setTypeId: handleTypeIdChange,
      itemList,
      searchKey,
      setSearchKey,
    };
  }, [currentPage, totalPages, typeId, itemList, searchKey]);

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
