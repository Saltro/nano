import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Tag from '@/components/Tag';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './index.less';

const RecommendItem: React.FC<IRecommendInfo> = (props) => {
  const { title, image, description, anime, update_time, tags, loaded } = props;
  const date = new Date(update_time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div id={style.container}>
      <Link to={`/detail/${anime}`}>
        {!loaded && <Skeleton height="9.95vw" borderRadius="15px" />}
        <div className={style.workCover}>
          <img src={image} alt={title} style={{ display: loaded ? 'block' : 'none' }} />
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
