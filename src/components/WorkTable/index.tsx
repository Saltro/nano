import React, { useEffect, useState } from 'react';
import Request from '@/request';
import { useWorkContext } from '@/context/WorkContainer';
import WorkItem, { IWorkItem } from './WorkItem';
import style from './index.less';

interface IWorkTable {
  searchKey: string;
}

const WorkTable: React.FC<IWorkTable> = (props) => {
  const { currentPage, totalPages, orderingKey, search, setTotalPages, setSearch, setOrderingKey } = useWorkContext();

  const [workItemList, setWorkItemList] = useState<IWorkItem[]>([]);
  const [empty, setEmpty] = useState(false);

  const refreshWorkItemList = () => {
    if (currentPage === 0) {
      return;
    }
    console.log(currentPage, totalPages, search, orderingKey);
    Request.getAnimePage(currentPage, undefined, search, orderingKey)
      .then((res) => {
        const { data } = res;
        console.log('获取WorkList成功', data);
        setTotalPages(Math.ceil(data.count / 20));
        if (data.results.length === 0) {
          setEmpty(true);
          setWorkItemList([]);
        } else {
          setEmpty(false);
          setWorkItemList(data.results);
        }
      })
      .catch((err) => {
        console.log('获取WorkList失败', err);
      });
  };

  useEffect(() => {
    // 初始化加载
    setSearch(props.searchKey);
    setOrderingKey('id');
  }, []);

  useEffect(() => {
    // 改变搜索关键字
    setSearch(props.searchKey);
    setOrderingKey('id');
  }, [props.searchKey]);

  useEffect(() => {
    // 刷新
    refreshWorkItemList();
  }, [currentPage, orderingKey, search]);

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
