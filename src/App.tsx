import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
          <Route path="/:page" element={<Home />} />
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work/:page/:ordering/:ascending" element={<Work />} />
          <Route path="/work" element={<Navigate to="/work/1/id/true" />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/search/:key/:page" element={<Search />} />
          <Route path="/search/:key" element={<Search />} />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
