import React from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';
import { IWorkInfo } from '@/context/WorkContainer';

const WorkItem: React.FC<IWorkInfo> = (props) => {
  const { id, cover_medium, title_cn } = props;
  return (
    <div id={style.container}>
      <Link to={`/work/${id}`}>
        <div className={style.workCover}>
          <img src={cover_medium} alt={title_cn} />
        </div>
        <div className={style.workName}>{title_cn}</div>
      </Link>
    </div>
  );
};

export default WorkItem;
