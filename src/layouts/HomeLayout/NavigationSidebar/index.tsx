import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import { useAuth } from '@/context/AuthContainer';
import style from './index.less';

interface INavigationSidebarProps {
  navSelected: NavItemsName;
}

const NavigationSidebar: React.FC<INavigationSidebarProps> = ({ navSelected }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Work',
      default: 'http://qiniu-picgo.saltroping.com/作品.png',
      selected: 'http://qiniu-picgo.saltroping.com/作品-选中.png',
      onClick: () => {
        navigate('/work');
      },
    },
    {
      name: 'Place',
      default: 'http://qiniu-picgo.saltroping.com/地点.png',
      selected: 'http://qiniu-picgo.saltroping.com/地点.png',
      onClick: () => {
        navigate('/places/401');
      },
    },
  ];

  return (
    <div id={style.outer}>
      <div id={style.container}>
        <svg id={style.logo} onClick={() => navigate('/')} viewBox={logo.viewBox}>
          <use xlinkHref={`#${logo.id}`} />
        </svg>
        <p className={style.title} onClick={() => navigate('/')}>
          Nano
        </p>
        <p className={style.subtitle}>圣地巡礼地点全收录</p>
        <div id={style.navContainer}>
          {navItems.map((item, index) => (
            <img
              key={index}
              src={navSelected === item.name ? item.selected : item.default}
              alt=""
              onClick={item.onClick}
            />
          ))}
        </div>
        <div id={style.userInfo}>
          <img src={auth?.userInfo?.avatar} />
          <p>{auth?.userInfo?.username}</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
