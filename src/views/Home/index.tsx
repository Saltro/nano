import React from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import style from './index.less';
import { Link } from 'react-router-dom';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <div id={style.container}>这里是主页中间部分</div>
      <Link to="/login">登录</Link>
    </HomeLayout>
  );
};

export default Home;
