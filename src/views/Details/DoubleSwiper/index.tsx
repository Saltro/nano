import React from 'react';
import style from './index.less';
import { Carousel, Image } from 'antd';
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
      <Image.PreviewGroup>
        <Carousel autoplay>
          {toGroup(pictures).map((group, index) => {
            return (
              <div key={index} className={style.slide}>
                <div className={style.imgContainer}>
                  <Image
                    src={group[0]}
                    className={style.firstImg}
                    width="100%"
                    height="100%"
                    preview={{ visible: false }}
                  />
                </div>
                <div className={style.imgContainer}>
                  <Image src={group[1]} className={style.secondImg} width="100%" height="100%" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </Image.PreviewGroup>
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
