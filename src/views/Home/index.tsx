import React from 'react';
import HomeLayout from '@/layouts/HomeLayout';
import style from './index.less';

const Home: React.FC<{}> = () => {
  return (
    <HomeLayout>
      <div id={style.container}>这里是主页中间部分</div>
    </HomeLayout>
  );
};

export default Home;
