import React from 'react';
import WorkItem from './WorkItem';
import style from './index.less';

interface IWorkTableProps {
  workItems: IAnimeInfoBrief[];
}

const WorkTable: React.FC<IWorkTableProps> = ({ workItems }) => {
  return (
    <div id={style.container}>
      {workItems.map((item) => {
        return <WorkItem key={item.id} {...item} />;
      })}
      <div style={{ display: workItems.length === 0 ? 'block' : 'none' }} className={style.text}>
        {' '}
        暂无数据{' '}
      </div>
    </div>
  );
};

export default WorkTable;
