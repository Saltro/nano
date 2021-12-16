import React, { useEffect, useState } from 'react';
import style from './index.less';
import WorkItem, { IWorkItem } from '@/components/WorkTable/WorkItem';
import { useWorkContext } from '@/context/WorkContainer';
import Request from '@/request';

interface IWorkTable {
  searchKey: string;
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const { currentPage, totalPages, typeId, searchKey, setTotalPages, setSearchKey, setTypeId } =
    useWorkContext();

  const [workItemList, setWorkItemList] = useState<IWorkItem[]>([]);

  const refreshWorkItemList = () => {
    if (typeId === 0 || currentPage === 0) {
      return;
    }
    console.log({ currentPage: currentPage, totalPages: totalPages, typeId: typeId, searchKey: searchKey });
    Request.getWorkList(typeId, currentPage, searchKey)
      .then((res) => {
        console.log('获取WorkList成功', res);
        setTotalPages(Math.ceil(res.count / 20));
        setWorkItemList(res.results);
      })
      .catch((err) => {
        console.log('获取WorkList失败', err);
      });
  };

  useEffect(() => {
    // 初始化加载
    setSearchKey(props.searchKey);
    setTypeId(props.searchKey === '' ? 1 : -1);
  }, []);

  useEffect(() => {
    // 刷新
    refreshWorkItemList();
  }, [currentPage, typeId, searchKey]);

  return (
    <div id={style.container}>
      {workItemList.map((item) => {
        return <WorkItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default WorkTable;
