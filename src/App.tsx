import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './context/AuthContainer';
import Login from './views/Login';
import Home from './views/Home';
import './App.less';

const App: React.FC = () => {
  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
