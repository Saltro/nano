import React from 'react';
import style from './index.less';

interface ILoadingProps {
  isLoading?: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading = true, children }) => {
  return isLoading ? (
    <div style={{ display: isLoading ? 'flex' : 'none' }} id={style.loading}>
      <div />
    </div>
  ) : (
    (children as React.ReactElement)
  );
};

export default Loading;
