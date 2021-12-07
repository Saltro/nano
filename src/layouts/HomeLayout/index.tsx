import React from 'react';
import style from './index.less';
import NavigationSidebar from './components/NavigationSidebar';
import RecommendSidebar from './components/RecommendSidebar';

const HomeLayout: React.FC = ({ children }) => {
  return <div id={style.container}>
    <NavigationSidebar />
    {children}
    <RecommendSidebar />
  </div>;
};

export default HomeLayout;
