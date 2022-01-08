import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import style from './index.less';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { useImagesLoaded } from 'use-images-loaded';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RecommendCarousel: React.FC<{ recommendList: IRecommendInfo[] }> = ({ recommendList }) => {
  const pageNum = recommendList.length;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const ref = createRef<CarouselRef>();
  const [refImages, loadedImage] = useImagesLoaded();
  const [refOther, _loadedOther] = useImagesLoaded();

  const goTo = (slide: number) => {
    ref.current?.goTo(slide, false);
    setCurrentSlide(slide);
  };

  const handleSlideChange = (_currentSlide: number, nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <div id={style.container}>
      {!loadedImage && <Skeleton height="406.5px" borderRadius="15px" />}
      <Carousel
        autoplay
        autoplaySpeed={5000}
        ref={ref}
        beforeChange={handleSlideChange}
        dots={false}
        style={{ height: loadedImage ? 'auto' : '0' }}
      >
        {recommendList.map((info, index) => {
          return (
            <div className={style.slide} key={index} ref={index === 0 ? refImages : refOther}>
              <Link to={`/detail/${info?.anime}`}>
                <div className={style.description}>
                  <p>{info?.description}</p>
                </div>
                <div className={style.imgContainer}>
                  <img src={info?.image} alt={info?.title} style={{ display: loadedImage ? 'block' : 'none' }} />
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
      <div>
        {pageNum > 1 && (
          <div className={style.slideBottomBox}>
            {Array.from({ length: pageNum }).map((_, index) => {
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

export default RecommendCarousel;
