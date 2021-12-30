import React, { createRef } from 'react';
import style from './index.less';
import { Carousel, Image } from 'antd';
import NoData from '@/components/NoData';
import { CarouselRef } from 'antd/es/carousel';
import { useImagesLoaded } from 'use-images-loaded';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IDoubleSwiperProps {
  pictures: string[];
}

const DoubleSwiper: React.FC<IDoubleSwiperProps> = ({ pictures }) => {
  const ref = createRef<CarouselRef>();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const imageGroups = toGroup(pictures);
  const [refImages, loadedImage] = useImagesLoaded();
  const [refOther, _loadedOther] = useImagesLoaded();

  const goTo = (slide: number) => {
    ref.current?.goTo(slide, false);
    setCurrentSlide(slide);
  };

  const handleSlideChange = (_currentSlide: number, nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

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
      {!loadedImage && <Skeleton height="12.75vw" borderRadius="15px" />}
      <Image.PreviewGroup>
        <Carousel autoplay dots={false} ref={ref} beforeChange={handleSlideChange}>
          {toGroup(pictures).map((group, index) => {
            return (
              <div key={index} className={style.slide} ref={index === 0 ? refImages : refOther}>
                <div className={style.imgContainer}>
                  <Image
                    src={group[0]}
                    className={style.firstImg}
                    width="100%"
                    height="100%"
                    preview={{ visible: false }}
                    style={{ display: loadedImage ? 'block' : 'none' }}
                  />
                </div>
                <div className={style.imgContainer}>
                  <Image src={group[1]} className={style.secondImg} width="100%" height="100%" style={{ display: loadedImage ? 'block' : 'none' }}/>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Image.PreviewGroup>
      <div>
        {imageGroups.length > 1 && (
          <div className={style.slideBottomBox}>
            {Array.from({ length: imageGroups.length }).map((_, index) => {
              return (
                <span
                  key={index}
                  className={index === currentSlide ? style.slideBottomActive : style.slideBottom}
                  onClick={() => {
                    goTo(index);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
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
