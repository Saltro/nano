import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MineLayout from '@/layouts/MineLayout';
import { useAuth } from '@/context/AuthContainer';
import RequireAuth from '@/components/RequireAuth';
import Settings from './Settings';
import style from './index.less';
import Collections from './Collections';

const Mine: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const navItems = [
    {
      name: '收藏',
      path: '/mine',
    },
    {
      name: '设置',
      path: '/mine/settings',
    },
  ];

  const statisticsItems = [
    {
      name: '收藏数',
      value: 4,
    },
  ];

  return (
    <RequireAuth>
      <MineLayout>
        {{
          sidebar: (
            <>
              <img id={style.avatar} src={auth?.userInfo?.avatar} />
              <span id={style.nickname}>{auth?.userInfo?.username}</span>
              <div id={style.statisticsContainer}>
                {statisticsItems.map((item) => (
                  <div key={item.name} className={style.statistics}>
                    <span className={style.value}>{item.value}</span>
                    <span className={style.name}>{item.name}</span>
                  </div>
                ))}
              </div>
              <div id={style.navContainer}>
                {navItems.map((item, index) => (
                  <div
                    className={path === item.path ? style.navItemSelected : style.navItem}
                    key={index}
                    onClick={() => navigate(item.path)}
                  >
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </>
          ),
          content: (
            <Routes>
              <Route path="/" element={<Collections />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          ),
        }}
      </MineLayout>
    </RequireAuth>
  );
};

export default Mine;
