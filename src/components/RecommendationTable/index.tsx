import React, { useEffect, useState } from 'react';
import style from './index.less';
import RecommendationItem from '@/components/RecommendationTable/RecommendationItem';
import { useRecommendationContext } from '@/context/RecommendationContainer';

const RecommendationTable: React.FC<{}> = () => {
  const recommendationContext = useRecommendationContext();

  const [recommendationList, setRecommendationList] = useState(recommendationContext.itemList);

  useEffect(() => {
    setRecommendationList(recommendationContext.itemList);
  }, [recommendationContext.itemList]);

  return (
    <div id={style.container}>
      {recommendationList.map((item) => {
        return <RecommendationItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default RecommendationTable;
