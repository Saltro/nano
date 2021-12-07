import React from 'react';
import { useAuth } from '@/context/AuthContainer';
import { Navigate } from 'react-router';

const RequireAuth: React.FC<{}> = ({ children }) => {
  const auth = useAuth();
  if (!auth?.userInfo) {
    return <Navigate to="/login" />;
  }
  return children as React.ReactElement;
};

export default RequireAuth;
