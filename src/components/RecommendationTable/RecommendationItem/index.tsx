import React from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';
import { IRecommendationInfo } from '@/context/RecommendationContainer';
import Tag from '@/components/Tag';

const RecommendationItem: React.FC<IRecommendationInfo> = (props) => {
  const { title, image, description, anime, update_time, tags } = props;
  const date = new Date(update_time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div id={style.container}>
      <Link to={`/work/${anime}`}>
        <div className={style.workCover}>
          <img src={image} alt={title} />
        </div>
        <div className={style.recommendationName}>{title}</div>
        <div className={style.recommendationInfo}>
          <div className={style.recommendationTags}>
            <Tag item={tags} />
          </div>
          <div className={style.recommendationDate}>
            {year}-{month}-{day}
          </div>
        </div>
        <div className={style.recommendationDescription}>{description}</div>
      </Link>
    </div>
  );
};

export default RecommendationItem;
