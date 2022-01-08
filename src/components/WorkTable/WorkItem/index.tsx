import React from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WorkItem: React.FC<IAnimeInfoBrief> = (props) => {
  const { id, cover_medium, title_cn, loaded } = props;
  return (
    <div id={style.container}>
      <Link to={`/detail/${id}`}>
        {!loaded && <Skeleton height="210px" borderRadius="15px" />}
        <img src={cover_medium} alt={title_cn} style={{ display: loaded ? 'block' : 'none' }} />
        <div className={style.workName}>{title_cn}</div>
      </Link>
    </div>
  );
};

export default WorkItem;
