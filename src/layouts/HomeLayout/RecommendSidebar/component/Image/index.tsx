import React from 'react';
import style from './index.less';

interface IImageProps {
  src: string;
  title?: string;
}

const Image: React.FC<IImageProps> = ({ src, title }) => {
  return (
    <div className={style.container}>
      <img src={src} alt={title} />
      {title && <span className={style.title}>{title}</span>}
    </div>
  );
};
export default Image;
