import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Authenticated from './components/Authenticated';
import AuthContainer, { useAuth } from './context/AuthContainer';
import Login from './views/Login';
import './App.less';

const App: React.FC = () => {
  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/pro"
            element={
              <RequireAuth>
                <Authenticated />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthContainer>
    </div>
  );
};

const RequireAuth: React.FC<{}> = ({ children }) => {
  const auth = useAuth();
  if (!auth?.userInfo) {
    return <Navigate to="/login" />;
  }
  return children as React.ReactElement;
};

export default App;
