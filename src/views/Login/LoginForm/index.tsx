import React from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from './index.less';
import formStyle from '../assets/form.less';
import { useAuth } from '@/context/AuthContainer';

const LoginForm: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginClick = () => {
    const validations = [
      {
        validator: () => username.length > 6 && username.length <= 16,
        message: '用户名长度不能小于6位且不能长于16位',
      },
      {
        validator: () => password.length > 6 && password.length <= 24,
        message: '密码长度不能小于6位且不能长于24位',
      },
    ];

    for (const validation of validations) {
      if (!validation.validator()) {
        return message.error(validation.message);
      }
    }

    auth
      ?.login({ username, password })
      .then(() => {
        navigate(-1);
      })
      .catch((err) => {
        message.error(err.response.data.detail);
      });
  };

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
      <button className={formStyle.button} onClick={onLoginClick}>
        登录
      </button>
    </>
  );
};

export default LoginForm;
