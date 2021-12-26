import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import animeNormal from '@/assets/icons/anime_normal.svg';
import animeSelect from '@/assets/icons/anime_select.svg';
import placeNormal from '@/assets/icons/place_normal.svg';
import placeSelect from '@/assets/icons/place_select.svg';
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
      text: '作品',
      default: animeNormal,
      selected: animeSelect,
      onClick: () => {
        navigate('/work');
      },
    },
    {
      name: 'Place',
      text: '地点',
      default: placeNormal,
      selected: placeSelect,
      onClick: () => {
        navigate('/places/0');
      },
    },
  ];

  return (
    <div id={style.outer}>
      <div id={style.container}>
        <div id={style.logo}>
          <svg onClick={() => navigate('/')} viewBox={logo.viewBox}>
            <use xlinkHref={`#${logo.id}`} />
          </svg>
        </div>
        <p className={style.title} onClick={() => navigate('/')}>
          Nano
        </p>
        <p className={style.subtitle}>圣地巡礼地点全收录</p>
        <div id={style.navContainer}>
          {navItems.map((item, index) => (
            <div
              className={style.navItem + ' ' + (navSelected === item.name ? style.selected : '')}
              key={index}
              onClick={item.onClick}
            >
              <svg
                className={style.logo}
                viewBox={navSelected === item.name ? item.selected.viewBox : item.default.viewBox}
              >
                <use xlinkHref={`#${navSelected === item.name ? item.selected.id : item.default.id}`} />
              </svg>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {auth?.userInfo ? (
          <div id={style.userInfo} onClick={() => navigate('/mine')}>
            <img src={auth?.userInfo?.avatar} />
            <p>{auth?.userInfo?.nickname}</p>
          </div>
        ) : (
          <div id={style.userInfo} onClick={() => navigate('/login')}>
            <p>登录</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationSidebar;
