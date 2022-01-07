import React from 'react';
import style from './index.less';

interface IImageProps {
  src: string;
  title?: string;
  loaded?: boolean;
}

const Image: React.FC<IImageProps> = ({ src, title, loaded }) => {
  return (
    <div className={style.container}>
      <img src={src} alt={title} style={{ display: loaded ? 'block' : 'none' }} />
      {loaded && title && <span className={style.title}>{title}</span>}
    </div>
  );
};
export default Image;
