import React from 'react';
import { useAuth } from '@/context/AuthContainer';
import style from './index.less';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div id={style.container}>
      <input
        className={style.inputBar}
        type="text"
        placeholder="用户名"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={style.inputBar}
        type="password"
        placeholder="密码"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className={style.submitBtn}
        onClick={() => {
          auth?.login({ username, password });
          navigate('/');
        }}
      >
        登录
      </button>
      <button className={style.submitBtn} onClick={() => navigate('/')}>
        返回首页
      </button>
    </div>
  );
};

export default Login;
