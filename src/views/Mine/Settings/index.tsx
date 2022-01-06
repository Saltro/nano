import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContainer';
import InfoItem, { IInfoItemProps } from './InfoItem';
import style from './index.less';

const Settings: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const infoItems: IInfoItemProps[] = [
    {
      title: '用户名',
      value: auth?.userInfo?.username,
    },
    {
      title: '昵称',
      value: auth?.userInfo?.nickname,
      editable: true,
    },
    {
      title: '绑定手机',
      value: '+86 ' + auth?.userInfo?.mobile,
      editable: true,
      editLabel: '切换手机号',
    },
    {
      title: '绑定邮箱',
      editable: true,
      editLabel: '立刻绑定',
    },
    {
      title: '密码',
      value: '已设置',
      editable: true,
      editLabel: '修改密码',
    },
  ];

  return (
    <div id={style.container}>
      <div id={style.infoContainer}>
        <p className={style.title}>基本信息</p>
        <div>
          {infoItems.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div id={style.interestContainer}>
        <p className={style.title}>兴趣标签</p>
      </div>
      <div id={style.authContainer}>
        <p className={style.title}>登录状态</p>
        <button
          className={style.warnBtn}
          onClick={() => {
            auth?.logout();
            navigate('/');
          }}
        >
          退出登录
        </button>
      </div>
    </div>
  );
};

export default Settings;
