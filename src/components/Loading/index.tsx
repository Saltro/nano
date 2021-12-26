import React from 'react';
import style from './index.less';

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading, children }) => {
  return (
    <>
      <div style={{ display: isLoading ? 'flex' : 'none' }} id={style.loading}>
        <div />
      </div>
      <div style={{ display: !isLoading ? 'block' : 'none' }}>{children}</div>
    </>
  );
};

export default Loading;
