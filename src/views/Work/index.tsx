import React from 'react';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';
import HomeLayout from '@/layouts/HomeLayout';
import TypeChoose from '@/components/TypeChoose';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import WorkTable from '@/components/WorkTable';
import style from './index.less';

const Work: React.FC<{}> = () => {
  const TypeChooseItemList: {
    name: string;
    orderingKey: AnimeOrderingKey;
    ascending: boolean;
  }[] = [
    // 分类筛选数据
    { name: '全部作品', orderingKey: 'id', ascending: true },
    { name: '热门作品', orderingKey: 'collection_num', ascending: false },
    { name: '最新发布', orderingKey: 'update_time', ascending: false },
    { name: '动画电影', orderingKey: 'title_cn', ascending: true },
    { name: '轻小说/游戏衍生', orderingKey: 'create_time', ascending: true },
  ];

  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.breadCrumb}>
            <span style={{ color: '#3E4252' }}>首页</span>
            <span style={{ margin: '0 4px' }}>/</span>
            <span>作品</span>
          </div>
          <div className={style.search}>
            <SearchBox searchKey="" />
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
