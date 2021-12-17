import React from 'react';
import style from './index.less';

interface IProps {
  img: string;
  text: string;
}

const NoData: React.FC<IProps> = ({ img, text }) => {
  return (
    <div className={style.container}>
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default NoData;
