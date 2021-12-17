import { createContext } from 'react';

interface IRecommendationContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  setTotalPages: (page: number) => void;
}

const RecommendationContext = createContext<IRecommendationContext>({
  currentPage: 1,
  setTotalPages: () => {},
  totalPages: 1,
  setCurrentPage: () => {},
});

export default RecommendationContext;
