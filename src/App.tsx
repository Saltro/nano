import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './context/AuthContainer';
import Login from './views/Login';
import Home from './views/Home';
import Details from './views/Details';
import Work from '@/views/Work';
import './App.less';
import './assets/iconfont/iconfont.css';
import 'antd/dist/antd.css';
import Search from '@/views/Search';

const App: React.FC = () => {
  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work" element={<Work />} />
          <Route path="/details" element={<Details />} />
          <Route path="/search/" element={<Search />} />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
