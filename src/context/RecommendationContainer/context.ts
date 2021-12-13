import { createContext } from 'react';
import { IRecommendationInfo } from '@/context/RecommendationContainer/index';

interface IRecommendationContext {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  itemList: IRecommendationInfo[];
}

const RecommendationContext = createContext<IRecommendationContext>({
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => {},
  itemList: [],
});

export default RecommendationContext;
