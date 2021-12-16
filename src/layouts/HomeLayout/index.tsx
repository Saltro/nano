import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './index.less';
import NavigationSidebar from './NavigationSidebar';
import RecommendSidebar from './RecommendSidebar';
import DetailsSidebar from './DetailsSidebar';

const HomeLayout: React.FC = ({ children }) => {
  const location = useLocation();
  let navSelected: NavItemsName = '';
  switch (location.pathname) {
    case '/work':
    case '/detail':
      navSelected = 'Work';
      break;
  }

  return (
    <>
      <div id={style.container}>
        <NavigationSidebar navSelected={navSelected} />
        {children}
        {/\/details.*$/.test(location.pathname) ? <DetailsSidebar /> : <RecommendSidebar />}
      </div>
      <footer>
        <p id={style.copyright}>Copy Right©2021, All Rights Reserved. </p>
      </footer>
    </>
  );
};

export default HomeLayout;
