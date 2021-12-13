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
  const [recommendationList, setRecommendationList] = React.useState<IRecommendationInfo[]>([]);

  useEffect(() => {
    Request.getRecommendationList(currentPage)
      .then((res) => {
        console.log('获取RecommendationList成功', res);
        setTotalPages(Math.ceil(res.count / 20));
        setRecommendationList(res.results);
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
      recommendationList,
    };
  }, [currentPage, totalPages, recommendationList]);

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
