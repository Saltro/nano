import React from 'react';
import style from './index.less';

export interface IDetailProps {
  title: string;
  titleCN: string;
  image: string;
  description: string;
  director: string[];
  actors: string[];
  categories: string[];
  website: string;
  country: string;
  origin: string[];
  storyboard: string[];
  script: string[];
  music: string[];
  producer: string[];
  alias: string[];
  date: string;
}

const Detail: React.FC<IDetailProps> = (props) => {
  const {
    title,
    titleCN,
    image,
    description,
    director,
    actors,
    categories,
    country,
    date,
    alias,
    origin,
    storyboard,
    script,
    music,
    producer,
  } = props;

  return (
    <div className="container">
      <h1 className={style.title}>{titleCN + '  ' + title}</h1>
      <div className={style.tags}>
        <span className={style.date}>动画电影</span>
        <span className={style.date}>{date}</span>
        {categories.map((category, index) => {
          return (
            <span className={style.category} key={index}>
              {category}
            </span>
          );
        })}
      </div>

      <div className={style.details}>
        <img src={image} className={style.image} />
        <div className={style.info}>
          {director.length > 0 && (
            <p>
              <span className={style.filed}>导演 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {director.join(' / ')}
            </p>
          )}
          {origin.length > 0 && (
            <p>
              <span className={style.filed}>原作 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{origin.join(' / ')}
            </p>
          )}
          {storyboard.length > 0 && (
            <p>
              <span className={style.filed}>分镜 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {storyboard.join(' / ')}
            </p>
          )}
          {script.length > 0 && (
            <p>
              <span className={style.filed}>脚本 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{script.join(' / ')}
            </p>
          )}
          {music.length > 0 && (
            <p>
              <span className={style.filed}>音乐 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{music.join(' / ')}
            </p>
          )}
          {producer.length > 0 && (
            <p>
              <span className={style.filed}>制作 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {producer.join(' / ')}
            </p>
          )}
          {actors.length > 0 && (
            <p>
              <span className={style.filed}>演员 : </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{actors.join(' / ')}
            </p>
          )}
          {country.length > 0 && (
            <p>
              <span className={style.filed}>制片国家 : </span>
              {country}
            </p>
          )}
          {alias.length > 0 && (
            <p>
              <span className={style.filed}>其他名称 : </span>
              {alias.join(' / ')}
            </p>
          )}
        </div>
      </div>
      <div className={style.description}>
        <p className={style.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

export default Detail;
