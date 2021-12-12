import React from 'react';
import style from './index.less';
import NavigationSidebar from './NavigationSidebar';
import RecommendSidebar from './RecommendSidebar';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <>
      <div id={style.container}>
        <NavigationSidebar />
        {children}
        <RecommendSidebar />
      </div>
      <footer>
        <p id={style.copyright}>Copy Right©2021, All Rights Reserved. </p>
      </footer>
    </>
  );
};

export default HomeLayout;
