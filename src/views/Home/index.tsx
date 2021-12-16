import React from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import style from './index.less';
import RecommendationTable from '@/components/RecommendationTable';
import RecommendationContainer, { useRecommendationContext } from '@/context/RecommendationContainer';
import { Link } from 'react-router-dom';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.search}>
            <SearchBox />
          </div>
        </div>
        <RecommendationContainer>
          <div>
            <RecommendationTable />
            <PageController context={useRecommendationContext} />
          </div>
        </RecommendationContainer>
      </div>
      <div style={{ position: 'absolute' }}>
        <Link to="/login">登录</Link>
        <Link to="/details">详情</Link>
        <Link to="/search?key=re">搜索</Link>
      </div>
    </HomeLayout>
  );
};

export default Home;
