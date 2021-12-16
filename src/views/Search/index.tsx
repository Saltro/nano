import React from 'react';
import style from './index.less';
import HomeLayout from '@/layouts/HomeLayout';
import WorkTable from '@/components/WorkTable';
import PageController from '@/components/PageController';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';

const Search: React.FC<{}> = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);

  return (
    <HomeLayout>
      <div id={style.container}>
        <WorkContainer>
          <WorkTable searchKey={params.get('key') || ''} />
          <PageController context={useWorkContext} />
        </WorkContainer>
      </div>
    </HomeLayout>
  );
};

export default Search;
