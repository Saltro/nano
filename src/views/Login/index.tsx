import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import style from './index.less';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFunction, setSelectedFunction] = React.useState('login');

  const onFunctionBarLabelLogin = () => {
    setSelectedFunction('login');
    console.log(style.functionBarLabel + ' ' + style.functionBarLabelSelected);
  };

  const onFunctionBarLabelRegister = () => {
    setSelectedFunction('register');
  };

  return (
    <div id={style.container}>
      <div id={style.card}>
        <img id={style.logo} src="https://s2.loli.net/2021/12/09/yY73b1d5ZQWz2Up.png" onClick={() => navigate('/')} />
        <p id={style.subtitle}>圣地巡礼地点全收录</p>
        <div id={style.tabBar}>
          <p
            className={style.label + ' ' + (selectedFunction === 'login' ? style.selected : '')}
            onClick={onFunctionBarLabelLogin}
          >
            登录
          </p>
          <p
            className={style.label + ' ' + (selectedFunction === 'register' ? style.selected : '')}
            onClick={onFunctionBarLabelRegister}
          >
            注册
          </p>
        </div>
        {selectedFunction === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
      <div id={style.circle1} />
      <div id={style.circle2} />
      <div id={style.square1} />
      <div id={style.square2} />
      <svg
        id={style.bottom}
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="167"
        viewBox="0 0 1920 167"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0.5L79.5 6.75578C160.5 13.0116 319.5 25.5231 480 46.6965C640.5 68.3512 799.5 99.1488 960 105.405C1120.5 111.66 1279.5 92.8931 1440 87.1185C1600.5 80.8627 1759.5 87.1185 1840.5 90.0058L1920 92.8931V167H1840.5C1759.5 167 1600.5 167 1440 167C1279.5 167 1120.5 167 960 167C799.5 167 640.5 167 480 167C319.5 167 160.5 167 79.5 167H0V0.5Z"
          fill="#F7BCC2"
          fillOpacity="0.54"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 67.1L64 80.42C128 93.74 256 120.38 384 113.72C512 107.06 640 67.1 768 40.46C896 13.82 1024 0.5 1152 0.5C1280 0.5 1408 13.82 1536 37.13C1664 60.44 1792 93.74 1856 110.39L1920 127.04V167H1856C1792 167 1664 167 1536 167C1408 167 1280 167 1152 167C1024 167 896 167 768 167C640 167 512 167 384 167C256 167 128 167 64 167H0V67.1Z"
          fill="#F7BCC2"
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
};

export default Login;
