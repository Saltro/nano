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
          <p>导演 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{director.join(' / ')}</p>
          <p>原作 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{origin.join(' / ')}</p>
          <p>分镜 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{storyboard.join(' / ')}</p>
          <p>脚本 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{script.join(' / ')}</p>
          <p>音乐 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{music.join(' / ')}</p>
          <p>制作 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{producer.join(' / ')}</p>
          <p>演员 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{actors.join(' / ')}</p>
          <p>制片国家 : {country}</p>
          <p>其他名称 : {alias.join(' / ')}</p>
        </div>
      </div>
      <div className={style.description}>
        <p className={style.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

export default Detail;
