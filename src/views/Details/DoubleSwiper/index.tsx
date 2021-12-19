import React from 'react';
import style from './index.less';
import { Carousel } from 'antd';
import NoData from '@/components/NoData';

interface IDoubleSwiperProps {
  pictures: string[];
}

const DoubleSwiper: React.FC<IDoubleSwiperProps> = ({ pictures }) => {
  if (pictures.length === 0) {
    return (
      <NoData
        img="https://github.com/Saltro/nano/blob/dev_details/src/assets/images/pic.png?raw=true"
        text="暂无数据"
      />
    );
  }
  return (
    <div className={style.container}>
      <Carousel autoplay>
        {toGroup(pictures).map((group, index) => {
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

function toGroup(arr: string[]): [string, string][] {
  let res: [string, string][] = [];
  for (let i = 0; i < Math.min(arr.length, 10); i += 2) {
    res.push([arr[i], arr[i + 1]]);
  }
  return res === [] ? [['', '']] : res;
}
