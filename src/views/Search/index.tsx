import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import style from './index.less';

const Search: React.FC<{}> = () => {
  const { key, page } = useParams();
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [workItems, setWorkItems] = useState<
    { id: number; title_cn: string; cover_medium: string; is_collected: boolean }[]
  >([]);

  const onCurrentPageChange = (currentPage: number) => {
    navigate(`/search/${key}/${currentPage}`);
  };

  useEffect(() => {
    Request.getAnimePage(page ? Number(page) : 1, undefined, key)
      .then((res) => {
        const { data } = res;
        console.log('获取WorkList成功', data);
        setTotalPages(Math.ceil(data.count / 20));
        setWorkItems(data.results);
      })
      .catch((err) => {
        console.error('获取WorkList失败', err);
      });
  }, [key, page]);

  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.breadCrumb}>
            <span style={{ color: '#3E4252' }}>首页</span>
            <span style={{ margin: '0 4px' }}>/</span>
            <span>搜索</span>
          </div>
          <div className={style.search}>
            <SearchBox init={key} />
          </div>
        </div>
        <WorkTable workItems={workItems} />
        <PageController
          currentPage={page ? Number(page) : 1}
          totalPages={totalPages}
          onCurrentPageChange={onCurrentPageChange}
        />
      </div>
    </HomeLayout>
  );
};

export default Search;
