import React from 'react';
import style from './index.less';
import TypeChoose from '@/components/TypeChoose';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';
import SearchBox from '@/components/SearchBox';

const Work: React.FC<{}> = () => {
  const TypeChooseItemList = [
    // 分类筛选数据
    { id: 1, name: '全部作品' },
    { id: 2, name: '热门作品' },
    { id: 3, name: '最新发布' },
    { id: 4, name: '动画电影' },
    { id: 5, name: '轻小说/游戏衍生' },
  ];

  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.breadCrumb}>
            <span style={{ color: '#3E4252' }}>首页</span>
            <span style={{margin: '0 4px'}}>/</span>
            <span>作品</span>
          </div>
          <div className={style.search}>
            <SearchBox searchKey='' />
          </div>
        </div>
        <WorkContainer>
          <TypeChoose itemList={TypeChooseItemList} />
          <WorkTable searchKey="" />
          <PageController context={useWorkContext} />
        </WorkContainer>
      </div>
    </HomeLayout>
  );
};

export default Work;
