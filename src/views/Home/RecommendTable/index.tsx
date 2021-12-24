import React from 'react';
import RecommendItem from './RecommendItem';
import style from './index.less';

const RecommendTable: React.FC<{ recommendList: IRecommendInfo[] }> = ({ recommendList }) => {
  return (
    <div id={style.container}>
      {recommendList.map((item) => {
        return <RecommendItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default RecommendTable;
