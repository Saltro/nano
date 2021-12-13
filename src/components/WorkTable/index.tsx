import React, { useEffect, useState } from 'react';
import style from './index.less';
import WorkItem from '@/components/WorkTable/WorkItem';
import { useWorkContext } from '@/context/WorkContainer';

const WorkTable: React.FC<{}> = () => {
  const workContext = useWorkContext();

  const [workItemList, setWorkItemList] = useState(workContext.itemList);

  useEffect(() => {
    setWorkItemList(workContext.itemList);
  }, [workContext.itemList]);

  return (
    <div id={style.container}>
      {workItemList.map((item) => {
        return <WorkItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default WorkTable;
