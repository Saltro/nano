import React from 'react';
import style from './index.less';
import { Link } from 'react-router-dom';

export interface IWorkItem {
  workId: number;
  cover: string;
  title_cn: string;
}

const WorkItem: React.FC<IWorkItem> = (props) => {
  const { workId, cover, title_cn } = props;
  return (
    <div id={style.container}>
      <Link to={`/work/${workId}`}>
        <div className={style.workCover}>
          <img src={cover} alt={title_cn} />
        </div>
        <div className={style.workName}>{title_cn}</div>
      </Link>
    </div>
  );
};

export default WorkItem;
