import React from 'react';
import { useNavigate } from 'react-router';
// import style from './index.less';

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/login')}>登录</button>
      <button onClick={() => navigate('/pro')}>显示更多</button>
    </div>
  );
}

export default Header;
