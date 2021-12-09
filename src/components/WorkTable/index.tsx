import React from 'react';
import style from './index.less';
import WorkItem, { IWorkItem } from '@/components/WorkTable/WorkItem';

interface IWorkTable {
  workItemList: IWorkItem[];
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const { workItemList } = props;

  return (
    <div id={style.container}>
      {workItemList.map((item) => {
        return <WorkItem key={item.workId} {...item} />;
      })}
    </div>
  );
};

export default WorkTable;
export { IWorkTable };
