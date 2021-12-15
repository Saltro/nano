import React from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import style from './index.less';
import RecommendationTable from '@/components/RecommendationTable';
import RecommendationContainer, { useRecommendationContext } from '@/context/RecommendationContainer';
import { Link } from 'react-router-dom';
import PageController from '@/components/PageController';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <RecommendationContainer>
        <div id={style.container}>
          <RecommendationTable />
          <PageController context={useRecommendationContext} />
        </div>
      </RecommendationContainer>
      <div style={{ position: 'absolute' }}>
        <Link to="/login">登录</Link>
        <Link to="/detail/1">详情</Link>
      </div>
    </HomeLayout>
  );
};

export default Home;
