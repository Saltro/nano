import React from 'react';
import style from './index.less';
import {Link} from "react-router-dom";

const NavigationSidebar: React.FC<{}> = () => {
  return (
    <div id={style.container}>
      <h1>Navigation Sidebar</h1>
      <Link to='/work'>Work</Link>
    </div>
  );
};

export default NavigationSidebar;
