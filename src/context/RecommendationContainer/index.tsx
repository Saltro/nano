import React, { useEffect, useMemo } from 'react';
import RecommendationContext from './context';
import Request from '@/request';

export interface IRecommendationInfo {
  id: number;
  title: string;
  image: string;
  description: string;
  score: number;
  create_time: string;
  update_time: string;
  anime: number;
  tags: {
    id: number;
    name: string;
  }[];
}

const RecommendationContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const [itemList, setItemList] = React.useState<IRecommendationInfo[]>([]);

  useEffect(() => {
    // Request.getRecommendationList(currentPage)
    Request.getRecommendationList(1) // TODO: 数据不够，暂时只请求第一页
      .then((res) => {
        console.log('获取RecommendationList成功', res);
        // setTotalPages(Math.ceil(res.count / 20));
        setTotalPages(16); // TODO: 假设有好多页数据
        setItemList(res.results);
      })
      .catch((err) => {
        console.log('获取RecommendationList失败', err);
      });
  }, [currentPage]);

  useEffect(() => {
    console.log({ currentPage: currentPage, totalPages: totalPages });
  });

  const value = useMemo(() => {
    return {
      currentPage,
      totalPages,
      setCurrentPage,
      itemList,
    };
  }, [currentPage, totalPages, itemList]);

  return <RecommendationContext.Provider value={value}>{children}</RecommendationContext.Provider>;
};

const useRecommendationContext = () => {
  const context = React.useContext(RecommendationContext);
  if (context === undefined) {
    throw new Error('useRecommendationContext must be used within a RecommendationContainer');
  }
  return context;
};

export default RecommendationContainer;
export { useRecommendationContext };
