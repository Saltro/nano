import React, { useEffect } from 'react';
import style from './index.less';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';
import SearchBox from '@/components/SearchBox';
import { useLocation } from 'react-router-dom';

const Search: React.FC<{}> = () => {
  let { state } = useLocation();
  const [searchKey, setSearchKey] = React.useState(state.key || '');

  useEffect(() => {
    if (state.key) {
      setSearchKey(state.key);
    }
  }, [state]);

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
