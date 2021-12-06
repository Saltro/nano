import { useAuth } from '@/context/AuthContainer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Authenticated: React.FC<{}> = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <div>
      <h1>!Authenticated!</h1>
      <h2>欢迎！{auth?.userInfo?.username}</h2>
      <button
        onClick={() => {
          auth?.logout();
          navigate('/');
        }}
      >
        退出
      </button>
    </div>
  );
};

export default Authenticated;
