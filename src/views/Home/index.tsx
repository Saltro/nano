import React from 'react';
import { Link } from 'react-router-dom';
import RecommendationContainer from '@/context/RecommendationContainer';
import HomeLayout from '@/layouts/HomeLayout';
// import PageController from '@/components/PageController';
import SearchBox from '@/components/SearchBox';
import RecommendationTable from './RecommendationTable';
import style from './index.less';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <div id={style.container}>
        <div className={style.top}>
          <div className={style.search}>
            <SearchBox searchKey="" />
          </div>
        </div>
        <RecommendationContainer>
          <div>
            <RecommendationTable />
            {/* <PageController context={useRecommendationContext} /> */}
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
