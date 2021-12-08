import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './context/AuthContainer';
import Login from './views/Login';
import Home from './views/Home';
import './App.less';
import Work from '@/views/Work';

const App: React.FC = () => {
  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
