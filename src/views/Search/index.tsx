import React from 'react';
import style from './index.less';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import { useLocation } from 'react-router-dom';

const Search: React.FC<{}> = () => {
  let { state } = useLocation();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);

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
            <SearchBox searchKey={state.key} />
          </div>
        </div>
        <WorkTable currentPage={currentPage} totalPages={totalPages} search={state.key} setTotalPages={setTotalPages} />
        <PageController currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </HomeLayout>
  );
};

export default Search;
