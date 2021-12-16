import React from 'react';
import style from './index.less';
import { Carousel } from 'antd';

interface IDoubleSwiperProps {
  pictures: string[];
}

const DoubleSwiper: React.FC<IDoubleSwiperProps> = ({ pictures }) => {
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


function toGroup(arr: string[]): [string, string][]{
  let res: [string, string][] = []
  for(let i = 0; i < Math.min(arr.length, 10); i+=2){
    res.push([arr[i], arr[i+1]])
  }
  console.log(res)
  return res === [] ? [["",""]] : res
}