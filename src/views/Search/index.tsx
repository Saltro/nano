import React, { useEffect } from 'react';
import style from './index.less';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';

const Search: React.FC<{}> = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const [searchKey, setSearchKey] = React.useState(params.get('key') || '');

  useEffect(() => {
    setSearchKey(params.get('key') || '');
  }, [params.get('key')]);

  return (
    <HomeLayout>
      <div id={style.container}>
        <WorkContainer>
          <WorkTable searchKey={searchKey} />
          <PageController context={useWorkContext} />
        </WorkContainer>
      </div>
    </HomeLayout>
  );
};

export default Search;
