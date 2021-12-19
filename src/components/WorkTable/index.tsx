import React, { useEffect, useState } from 'react';
import Request from '@/request';
import { useWorkContext } from '@/context/WorkContainer';
import WorkItem, { IWorkItem } from './WorkItem';
import style from './index.less';

interface IWorkTable {
  searchKey: string;
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const { currentPage, totalPages, typeId, searchKey, setTotalPages, setSearchKey, setTypeId } = useWorkContext();

  const [workItemList, setWorkItemList] = useState<IWorkItem[]>([]);
  const [empty, setEmpty] = useState(false);

  const refreshWorkItemList = () => {
    if (typeId === 0 || currentPage === 0) {
      return;
    }
    console.log({ currentPage: currentPage, totalPages: totalPages, typeId: typeId, searchKey: searchKey });
    Request.getWorkList(typeId, currentPage, searchKey)
      .then((res) => {
        console.log('获取WorkList成功', res);
        setTotalPages(Math.ceil(res.count / 20));
        if (res.results.length === 0) {
          setEmpty(true);
          setWorkItemList([]);
        } else {
          setEmpty(false);
          setWorkItemList(res.results);
        }
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
    // 改变搜索关键字
    setSearchKey(props.searchKey);
    setTypeId(props.searchKey === '' ? 1 : -1);
  }, [props.searchKey]);

  useEffect(() => {
    // 刷新
    refreshWorkItemList();
  }, [currentPage, typeId, searchKey]);

  return (
    <div id={style.container}>
      {workItemList.map((item) => {
        return <WorkItem key={item.id} {...item} />;
      })}
      <div style={{ display: empty ? 'block' : 'none' }} className={style.text}>
        {' '}
        暂无数据{' '}
      </div>
    </div>
  );
};

export default WorkTable;
