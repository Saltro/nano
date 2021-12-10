import React from 'react';
import style from './index.less';
import NavigationSidebar from './NavigationSidebar';
import RecommendSidebar from './RecommendSidebar';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <div id={style.container}>
      <NavigationSidebar />
      {children}
      <RecommendSidebar />
    </div>
  );
};

export default HomeLayout;
