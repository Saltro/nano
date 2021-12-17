import React from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';

export interface IWorkItem {
  id: number;
  title_cn: string;
  cover_medium: string;
  is_collected: boolean;
}

const WorkItem: React.FC<IWorkItem> = (props) => {
  const { id, cover_medium, title_cn } = props;
  return (
    <div id={style.container}>
      <Link to={`/detail/${id}`}>
        <div className={style.workCover}>
          <img src={cover_medium} alt={title_cn} />
        </div>
        <div className={style.workName}>{title_cn}</div>
      </Link>
    </div>
  );
};

export default WorkItem;
