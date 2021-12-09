import React from 'react';
import style from './index.less';
import formStyle from '../assets/form.less';
import { useAuth } from '@/context/AuthContainer';

const LoginForm: React.FC = () => {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <div className={formStyle.inputContainer}>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-user" />
          <input type="text" placeholder="用户名" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input type="password" placeholder="密码" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className={formStyle.functionBar}>
        <div id={style.passwdMemo}>
          <input className={formStyle.checkbox} type="checkbox" id="passwd-memo-checkbox" />
          <label htmlFor="passwd-memo-checkbox">记住密码</label>
        </div>
        <span>忘记密码？</span>
      </div>
      <button
        className={formStyle.button}
        onClick={() => {
          auth?.login({ username, password });
        }}
      >
        登录
      </button>
    </>
  );
};

export default LoginForm;
