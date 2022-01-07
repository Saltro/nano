import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { SettingOutlined, StarOutlined } from '@ant-design/icons';
import logo from '@/assets/icons/logo.svg';
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
      name: '设置',
      path: '/mine',
      icon: SettingOutlined,
    },
    {
      name: '收藏',
      path: '/mine/collections',
      icon: StarOutlined,
    },
  ];

  return (
    <RequireAuth>
      <MineLayout>
        {{
          sidebar: (
            <>
              <div id={style.logoContainer}>
                <div id={style.logo}>
                  <svg onClick={() => navigate('/')} viewBox={logo.viewBox}>
                    <use xlinkHref={`#${logo.id}`} />
                  </svg>
                </div>
                <p className={style.title} onClick={() => navigate('/')}>
                  Nano
                </p>
                <p className={style.subtitle}>圣地巡礼地点全收录</p>
              </div>
              <div id={style.avatar}>
                <img src={auth?.userInfo?.avatar} />
              </div>
              <p id={style.nickname}>{auth?.userInfo?.nickname}</p>
              <div id={style.navContainer}>
                {navItems.map((item, index) => (
                  <div
                    className={path === item.path ? style.navItemSelected : style.navItem}
                    key={index}
                    onClick={() => navigate(item.path)}
                  >
                    <item.icon
                      className={style.icon}
                      style={{
                        color: path === item.path ? '#f25d8e' : '',
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </>
          ),
          content: (
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/collections" element={<Collections />} />
            </Routes>
          ),
        }}
      </MineLayout>
    </RequireAuth>
  );
};

export default Mine;
