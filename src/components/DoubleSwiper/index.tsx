import React from 'react';
import style from './index.less';
import { Carousel } from 'antd';

interface IDoubleSwiperProps {
  pictures: [string, string][];
}

const DoubleSwiper: React.FC<IDoubleSwiperProps> = ({ pictures }) => {
  return (
    <div className={style.container}>
      <Carousel autoplay>
        {pictures.map((group, index) => {
          return (
            <div key={index} className={style.slide}>
              <div>
                <img src={group[0]} className={style.firstImg} />
              </div>
              <div>
                <img src={group[1]} className={style.secondImg} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default DoubleSwiper;
