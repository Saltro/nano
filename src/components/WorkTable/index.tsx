import React, { useEffect, useState } from 'react';
import style from './index.less';
import WorkItem from '@/components/WorkTable/WorkItem';
import { useWorkContext } from '@/context/WorkContainer';

interface IWorkTable {
  searchKey: string;
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const workContext = useWorkContext();

  const [workItemList, setWorkItemList] = useState(workContext.itemList);

  useEffect(() => {
    if (props.searchKey !== '')
    {
      console.log({ searchKey: props.searchKey });
      workContext.setSearchKey(props.searchKey);
      workContext.setTypeId(-1);
    }
  },[])

  useEffect(() => {
    setWorkItemList(workContext.itemList);
    if (props.searchKey !== '')
    {
      console.log({ searchKey: props.searchKey });
      workContext.setSearchKey(props.searchKey);
    }
  }, [workContext.itemList, props.searchKey]);

  return (
    <div id={style.container}>
      {workItemList.map((item) => {
        return <WorkItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default WorkTable;
