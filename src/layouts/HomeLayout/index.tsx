import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './index.less';
import NavigationSidebar from './NavigationSidebar';
import RecommendSidebar from './RecommendSidebar';

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
        <div className={style.left}>
          <NavigationSidebar navSelected={navSelected} />
        </div>
        <div className={style.center}>
          {children}
        </div>
        <div className={style.right}>
          <RecommendSidebar />
        </div>
      </div>
      <footer>
        <p id={style.copyright}>Copy Right©2021, All Rights Reserved. </p>
      </footer>
    </>
  );
};

export default HomeLayout;
