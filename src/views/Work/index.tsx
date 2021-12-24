import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import WorkTable from '@/components/WorkTable';
import TypeChoose from './TypeChoose';
import style from './index.less';

const Work: React.FC<{}> = () => {
  const { page, ordering, ascending } = useParams();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [workItems, setWorkItems] = useState<
    { id: number; title_cn: string; cover_medium: string; is_collected: boolean }[]
  >([]);

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

  const onCurrentPageChange = (currentPage: number) => {
    navigate(`/work/${currentPage}/${ordering}/${ascending}`);
  };

  useEffect(() => {
    Request.getAnimePage(Number(page), undefined, undefined, ordering as AnimeOrderingKey, ascending === 'true')
      .then((res) => {
        const { data } = res;
        console.log('获取AnimePage成功', data);
        setTotalPages(Math.ceil(data.count / 20));
        setWorkItems(data.results);
      })
      .catch((err) => {
        console.error('获取WorkList失败', err);
      });
  }, [page, ordering, ascending]);

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
            <SearchBox />
          </div>
        </div>
        <TypeChoose
          orderingKey={ordering as AnimeOrderingKey}
          ascending={ascending === 'true'}
          itemList={TypeChooseItemList}
        />
        <WorkTable workItems={workItems} />
        <PageController currentPage={Number(page)} totalPages={totalPages} onCurrentPageChange={onCurrentPageChange} />
      </div>
    </HomeLayout>
  );
};

export default Work;
