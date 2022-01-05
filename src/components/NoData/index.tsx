import React from 'react';
import style from './index.less';
import noPlace from '@/assets/icons/no_place.svg';
import noImage from '@/assets/icons/no_image.svg';
import noMap from '@/assets/icons/no_map.svg';
import noError from '@/assets/icons/no_error.svg';

type NoDataIcon = 'place' | 'image' | 'map';

interface INoDataProps {
  icon?: NoDataIcon;
  text?: string;
}

const NoDataSvg = ({ logo }: { logo: { content: string; id: string; viewBox: string; node: SVGSymbolElement } }) => {
  return (
    <svg className={style.noDataSvg} viewBox={logo.viewBox}>
      <use xlinkHref={`#${logo.id}`} />
    </svg>
  );
};

const NoData: React.FC<INoDataProps> = ({ icon, text = '暂无数据' }) => {
  return (
    <div className={style.container}>
      {icon === undefined && <NoDataSvg logo={noError} />}
      {icon === 'place' && <NoDataSvg logo={noPlace} />}
      {icon === 'image' && <NoDataSvg logo={noImage} />}
      {icon === 'map' && <NoDataSvg logo={noMap} />}
      <p>{text}</p>
    </div>
  );
};

export default NoData;
