import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContainer from './context/AuthContainer';
import Login from './views/Login';
import Home from './views/Home';
import Details from './views/Details';
import Mine from './views/Mine';
import Work from './views/Work';
import Search from './views/Search';
import Places from './views/Places';
import './App.less';
import './assets/iconfont/iconfont.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route path="/:page" element={<Home />} />
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mine/*" element={<Mine />} />
          <Route path="/work/:page/:ordering/:ascending" element={<Work />} />
          <Route path="/work" element={<Navigate to="/work/1/id/true" />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/search/:key/:page" element={<Search />} />
          <Route path="/search/:key" element={<Search />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:id" element={<Places />} />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
