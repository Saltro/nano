import React, { createRef } from 'react';
import { Link } from 'react-router-dom';
import style from './index.less';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

const RecommendCarousel: React.FC<{ recommendList: IRecommendInfo[] }> = ({ recommendList }) => {
  const pageNum = recommendList.length;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const ref = createRef<CarouselRef>();

  const goTo = (slide: number) => {
    ref.current?.goTo(slide, false);
    setCurrentSlide(slide);
  };

  const handleSlideChange = (_currentSlide: number, nextSlide: number) => {
    setCurrentSlide(nextSlide);
  };

  return (
    <div id={style.container}>
      <Carousel autoplay autoplaySpeed={5000} ref={ref} beforeChange={handleSlideChange} dots={false}>
        {recommendList.map((info, index) => {
          return (
            <div className={style.slide} key={index}>
              <Link to={`/detail/${info?.anime}`}>
                <div className={style.description}>{info?.description}</div>
                <div className={style.imgContainer}>
                  <img src={info?.image} alt={info?.title} />
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
