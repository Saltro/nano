import React, { useRef, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Modal, message } from 'antd';
import Request from '@/request';
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
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [nickname, setNickname] = useState(auth?.userInfo?.nickname);
  const [isChangingAvatar, setIsChangingAvatar] = useState(false);
  const [isChangingNickname, setIsChangingNickname] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);

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

  const onChangeAvatar = () => {
    if (avatarInputRef.current?.files) {
      setIsConfirmLoading(true);
      Request.changeAvatar(avatarInputRef.current?.files[0])
        .then(() => {
          message.success('修改头像成功');
          auth?.refreshInfo();
          setIsConfirmLoading(false);
          setIsChangingAvatar(false);
        })
        .catch(() => {
          message.error('修改头像失败');
          setIsConfirmLoading(false);
        });
    }
  };

  const onChangeNickname = () => {
    if (nickname !== undefined && nickname.length !== 0) {
      setIsConfirmLoading(true);
      Request.changeNickname(nickname)
        .then(() => {
          message.success('修改昵称成功');
          auth?.refreshInfo();
          setIsConfirmLoading(false);
          setIsChangingNickname(false);
        })
        .catch(() => {
          message.error('修改昵称失败');
          setIsConfirmLoading(false);
        });
    }
  };

  return (
    <RequireAuth>
      <MineLayout>
        {{
          sidebar: (
            <>
              <div id={style.avatar}>
                <img src={auth?.userInfo?.avatar} onClick={() => setIsChangingAvatar(true)} />
              </div>
              <div id={style.usernameContainer}>
                <p id={style.nickname} onClick={() => setIsChangingNickname(true)}>
                  {auth?.userInfo?.nickname}
                </p>
                <p id={style.username}>{auth?.userInfo?.username}</p>
              </div>
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
              <Modal
                title="修改头像"
                visible={isChangingAvatar}
                onOk={onChangeAvatar}
                onCancel={() => setIsChangingAvatar(false)}
                confirmLoading={isConfirmLoading}
              >
                <input type="file" ref={avatarInputRef} />
              </Modal>
              <Modal
                title="修改昵称"
                visible={isChangingNickname}
                onOk={onChangeNickname}
                onCancel={() => setIsChangingNickname(false)}
                confirmLoading={isConfirmLoading}
              >
                <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
              </Modal>
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
