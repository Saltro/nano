import React from 'react';
import style from './index.less';
import logo from '@/assets/icons/nodata.svg';

interface INoDataProps {
  text?: string;
}

const NoData: React.FC<INoDataProps> = ({ text = '暂无数据' }) => {
  return (
    <div className={style.container}>
      <svg className={style.noDataSvg} viewBox={logo.viewBox}>
        <use xlinkHref={`#${logo.id}`} />
      </svg>
      <p>{text}</p>
    </div>
  );
};

export default NoData;
