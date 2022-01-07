import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import animeNormal from '@/assets/icons/anime_normal.svg';
import animeSelect from '@/assets/icons/anime_select.svg';
import placeNormal from '@/assets/icons/place_normal.svg';
import placeSelect from '@/assets/icons/place_select.svg';
import collectNormal from '@/assets/icons/collect_normal.svg';
import collectSelect from '@/assets/icons/collect_select.svg';
import { useAuth } from '@/context/AuthContainer';
import { UserOutlined } from '@ant-design/icons';
import { useImagesLoaded } from 'use-images-loaded';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './index.less';

interface INavigationSidebarProps {
  navSelected: NavItemsName;
}

const NavigationSidebar: React.FC<INavigationSidebarProps> = ({ navSelected }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [refImages, loadedImage] = useImagesLoaded();

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
    {
      name: 'Collection',
      text: '收藏',
      default: collectNormal,
      selected: collectSelect,
      onClick: () => {
        navigate('/mine/collections');
      },
    },
  ];

  return (
    <div id={style.container}>
      <div id={style.header}>
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
        <div id={style.userInfo} onClick={() => navigate('/mine')} ref={refImages}>
          {!loadedImage && <Skeleton circle height="42px" width="42px" />}
          <img src={auth?.userInfo?.avatar} style={{ display: loadedImage ? 'block' : 'none' }} />
          <p>{auth?.userInfo?.nickname}</p>
        </div>
      ) : (
        <div id={style.userInfo} onClick={() => navigate('/login')}>
          <UserOutlined style={{ fontSize: '36px', margin: '0.2vw' }} />
          <p style={{ letterSpacing: '0.15em' }}>登录</p>
        </div>
      )}
    </div>
  );
};

export default NavigationSidebar;
