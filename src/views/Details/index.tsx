import HomeLayout from '@/layouts/HomeLayout';
import React from 'react';
import style from './index.less';

interface data {
  title: string;
  title_cn: string;
  image: string;
  description: string;
  director: string;
  screenwriter: string;
  actor: string[];
  category: string[];
  website: string;
  country: string;
  date: string;
  imdb: string;
  alias: string[];
}

export default function Details() {
  const data: data = useFetchDetails();
  return (
    <HomeLayout>
      <div className="container">
        <h1>{data.title_cn + '  ' + data.title}</h1>
        <div className={style.details}>
          <img src={data.image} className={style.image} />
          <div className={style.info}>
            <p>导演: {data.director}</p>
            <p>编剧: {data.screenwriter}</p>
            <p>演员: {addSlash(data.actor)}</p>
            <p>类型: {addSlash(data.category)}</p>
            <p>官方网站: {data.website}</p>
            <p>制片国家: {data.country}</p>
            <p>上映日期: {data.date}</p>
            <p>其他名称: {addSlash(data.alias)}</p>
            <p>IMDb: {data.imdb}</p>
          </div>
        </div>
        <div className={style.description}>
          <p className={style.descriptionText}>{data.description}</p>
        </div>
        <div className={style.gallery}>
          <div className={style.galleryTitle}>
            <h2>实景照片</h2>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

function useFetchDetails() {
  const data: data = {
    title: '秒速5センチメートル',
    title_cn: '秒速5厘米',
    image: 'https://img.zcool.cn/community/01c8955b1246bda801212d57074ad9.jpg@1280w_1l_2o_100sh.jpg',
    description:
      '第一话《樱花抄》主要场景为东京，从东京出发一路北上到达栃木岩舟的各个车站。 第二话《宇航员》场景集中在鹿儿岛县种子岛的中种子町。 第三话《秒速5厘米》场景再次回到东京，与第一话有诸多呼应之处。',
    director: '新海诚',
    screenwriter: '新海诚',
    actor: ['水桥研二', '近藤好美'],
    category: ['剧情', '爱情', '动画'],
    website: 'www.cwfilms.jp/5cm',
    country: '日本',
    date: new Date().toLocaleDateString(),
    imdb: '12345',
    alias: ['秒速五厘米', '秒速五公分'],
  };
  return data;
}

function addSlash(words: string[]) {
  let res = '';
  words.forEach((word, index) => {
    if (index === words.length - 1) {
      res += word;
    } else {
      res += word + ' / ';
    }
  });
  return res;
}
