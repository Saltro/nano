import React from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import style from './index.less';
import RecommendationTable from '@/components/RecommendationTable';
import RecommendationContainer, { useRecommendationContext } from '@/context/RecommendationContainer';
import { Link } from 'react-router-dom';
import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import WorkContainer, { useWorkContext } from '@/context/WorkContainer';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <WorkContainer>
        <div id={style.container}>
          <SearchBox context={useWorkContext}/>
          <RecommendationContainer>
            <div>
              <RecommendationTable />
              <PageController context={useRecommendationContext} />
            </div>
          </RecommendationContainer>
        </div>
      </WorkContainer>
      <div style={{ position: 'absolute' }}>
        <Link to="/login">登录</Link>
        <Link to="/details">详情</Link>
      </div>
    </HomeLayout>
  );
};

export default Home;
