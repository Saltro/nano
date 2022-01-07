import Footer from '@/components/Footer';
import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './index.less';
import NavigationSidebar from './NavigationSidebar';
import RecommendSidebar from './RecommendSidebar';

const HomeLayout: React.FC = ({ children }) => {
  const location = useLocation();
  let navSelected: NavItemsName = '';
  if (
    /\/work.*/.test(location.pathname) ||
    /\/detail.*/.test(location.pathname) ||
    /\/search.*/.test(location.pathname)
  ) {
    navSelected = 'Work';
  } else if (/\/places.*/.test(location.pathname)) {
    navSelected = 'Place';
  } else if (/\/mine.*/.test(location.pathname)) {
    navSelected = 'Collect';
  }

  return (
    <>
      <div id={style.container}>
        <NavigationSidebar navSelected={navSelected} />
        <div className={style.center}>{children}</div>
        <RecommendSidebar />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
