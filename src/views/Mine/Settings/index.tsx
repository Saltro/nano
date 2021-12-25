import React from 'react';
import { useAuth } from '@/context/AuthContainer';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        auth?.logout();
        navigate('/');
      }}
    >
      登出账号
    </button>
  );
};

export default Settings;
