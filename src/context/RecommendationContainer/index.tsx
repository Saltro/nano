import React, { useMemo } from 'react';
import RecommendationContext from './context';

const RecommendationContainer: React.FC<{}> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [totalPages, setTotalPages] = React.useState<number>(0);

  const value = useMemo(() => {
    return {
      currentPage,
      setCurrentPage,
      totalPages,
      setTotalPages,
    };
  }, [currentPage, totalPages]);

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
