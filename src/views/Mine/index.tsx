import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MineLayout from '@/layouts/MineLayout';
import { useAuth } from '@/context/AuthContainer';
import RequireAuth from '@/components/RequireAuth';
import Settings from './Settings';
import style from './index.less';

const Mine: React.FC = () => {
  const auth = useAuth();

  return (
    <RequireAuth>
      <MineLayout>
        {{
          sidebar: (
            <>
              <img id={style.avatar} src={auth?.userInfo?.avatar} />
              <span id={style.nickname}>{auth?.userInfo?.username}</span>
            </>
          ),
          content: (
            <Routes>
              <Route path="/" element={<Settings />} />
            </Routes>
          ),
        }}
      </MineLayout>
    </RequireAuth>
  );
};

export default Mine;
