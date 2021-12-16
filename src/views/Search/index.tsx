import React from 'react';
import style from './index.less';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';
import SearchBox from '@/components/SearchBox';

const Search: React.FC<{}> = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let searchKey = params.get('key') || '';

  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.breadCrumb}>
            <span style={{ color: '#3E4252' }}>首页</span>
            <span style={{margin: '0 4px'}}>/</span>
            <span>搜索</span>
          </div>
          <div className={style.search}>
            <SearchBox searchKey={searchKey} />
          </div>
        </div>
        <WorkContainer>
          <WorkTable searchKey={searchKey} />
          <PageController context={useWorkContext} />
        </WorkContainer>
      </div>
    </HomeLayout>
  );
};

export default Search;
