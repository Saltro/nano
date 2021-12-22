import React from 'react';
import style from './index.less';

interface IMineLayoutProps {
  children: {
    sidebar: React.ReactNode;
    content: React.ReactNode;
  };
}

const MineLayout: React.FC<IMineLayoutProps> = ({ children }) => {
  return (
    <div id={style.container}>
      <div id={style.sidebar}>{children?.sidebar}</div>
      <div id={style.content}>{children?.content}</div>
    </div>
  );
};

export default MineLayout;
