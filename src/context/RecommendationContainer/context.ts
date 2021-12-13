import { createContext } from 'react';
import { IRecommendationInfo } from '@/context/RecommendationContainer/index';

interface IRecommendationContext {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  recommendationList: IRecommendationInfo[];
}

const RecommendationContext = createContext<IRecommendationContext>({
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => {},
  recommendationList: [],
});

export default RecommendationContext;
