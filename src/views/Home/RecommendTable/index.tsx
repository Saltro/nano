import React from 'react';
import RecommendItem from './RecommendItem';
import { useImagesLoaded } from 'use-images-loaded';
import style from './index.less';

const RecommendTable: React.FC<{ recommendList: IRecommendInfo[] }> = ({ recommendList }) => {
  const [refImages, loadedImage] = useImagesLoaded();

  return (
    <div id={style.container} ref={refImages}>
      {recommendList.map((item) => {
        return <RecommendItem key={item.id} {...item} loaded={loadedImage} />;
      })}
    </div>
  );
};

export default RecommendTable;
