import React from 'react';
import WorkItem from './WorkItem';
import { useImagesLoaded } from 'use-images-loaded';
import style from './index.less';

interface IWorkTableProps {
  workItems: IAnimeInfoBrief[];
}

const WorkTable: React.FC<IWorkTableProps> = ({ workItems }) => {
  const [refImages, loadedImage] = useImagesLoaded();

  return (
    <div id={style.container} ref={refImages}>
      {workItems.map((item) => {
        return <WorkItem key={item.id} {...item} loaded={loadedImage}/>;
      })}
      <div style={{ display: workItems.length === 0 ? 'block' : 'none' }} className={style.text}>
        {' '}
        暂无数据{' '}
      </div>
    </div>
  );
};

export default WorkTable;
