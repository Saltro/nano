import React from 'react';
import style from './index.less';

interface IDetailProps {
  title: string;
  titleCN: string;
  image: string;
  description: string;
  director: string;
  screenwriter: string;
  actors: string[];
  categories: string[];
  website: string;
  country: string;
  date: Date;
  imdb: string;
  alias: string[];
}

const Detail: React.FC<IDetailProps> = (props) => {
  const {
    title,
    titleCN,
    image,
    description,
    director,
    screenwriter,
    actors,
    categories,
    website,
    country,
    date,
    imdb,
    alias,
  } = props;

  return (
    <div className="container">
      <h1 className={style.title}>{titleCN + '  ' + title}</h1>
      <div className={style.tags}>
        <span className={style.date}>动画电影</span>
        <span className={style.date}>{date.toLocaleDateString()}</span>
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
          <p>导演 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{director}</p>
          <p>编剧 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{screenwriter}</p>
          <p>演员 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{actors.join(' / ')}</p>
          <p>类型 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{categories.join(' / ')}</p>
          <p>官方网站 : {website}</p>
          <p>制片国家 : {country}</p>
          <p>上映日期 : {date.toLocaleDateString()}</p>
          <p>其他名称 : {alias.join(' / ')}</p>
          <p>IMDb : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{imdb}</p>
        </div>
      </div>
      <div className={style.description}>
        <p className={style.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

export default Detail;
