import React from 'react';
import Header from './components/Header';
import style from './App.less';
import Request from './request';

const App: React.FC = () => {
  Request.login({
    username: 'test123',
    password: '123456789',
  });

  Request.getUserInfo();

  return (
    <div>
      <Header />
      <h1 id={style.title}>Hello React + TypeScript!</h1>
      <h2 className={style.subtitle}>This is a subtitle</h2>
    </div>
  );
};

export default App;
