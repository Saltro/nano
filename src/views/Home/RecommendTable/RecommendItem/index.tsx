import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '@/components/Tag';
import style from './index.less';

const RecommendItem: React.FC<IRecommendInfo> = (props) => {
  const { title, image, description, anime, update_time, tags } = props;
  const date = new Date(update_time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div id={style.container}>
      <Link to={`/detail/${anime}`}>
        <div className={style.workCover}>
          <img src={image} alt={title} />
        </div>
        <div className={style.name}>{title}</div>
      </Link>
      <div className={style.info}>
        <div className={style.tags}>
          <Tag item={tags} />
        </div>
        <div className={style.date}>
          {year}-{month}-{day}
        </div>
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default RecommendItem;
