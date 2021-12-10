import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContainer';
import style from './index.less';

const NavigationSidebar: React.FC<{}> = () => {
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
        console.log('Place');
      },
    },
  ];

  return (
    <div id={style.outer}>
      <div id={style.container}>
        <svg
          id={style.logo}
          onClick={() => navigate('/')}
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <g filter="url(#filter0_d_92_149)">
            <rect x="4" y="2" width="72" height="72" rx="18" fill="white" />
          </g>
          <g filter="url(#filter1_d_92_149)">
            <path
              d="M51.7344 27.4922C52.1198 35.2005 52.2162 43.0052 52.0234 50.9062C48.9401 47.8229 45.375 43.8724 41.3281 39.0547C37.474 34.237 34.9688 30.9609 33.8125 29.2266C31.1146 25.3724 29.5729 22.5781 29.1875 20.8438C28.8021 19.6875 28.0313 19.013 26.875 18.8203C23.4063 19.3984 21.4792 20.2656 21.0938 21.4219C20.3229 22.9635 20.4193 23.7344 21.3828 23.7344C22.5391 24.3125 23.2136 25.6615 23.4063 27.7812C23.7917 29.901 23.9844 32.0208 23.9844 34.1406C23.4063 39.3438 21.8646 44.1615 19.3594 48.5938C17.625 52.2552 16.9505 54.4714 17.3359 55.2422C17.5287 57.7474 18.5886 58.9036 20.5156 58.7109C21.6719 58.9036 22.7318 58.5182 23.6953 57.5547C26.0078 54.0859 27.4531 49.75 28.0313 44.5469C28.6094 39.151 28.8021 34.526 28.6094 30.6719C29.3802 31.8281 30.2474 33.1771 31.2109 34.7188C32.3672 36.0677 33.138 36.9349 33.5234 37.3203C38.1484 43.2943 41.8099 48.2083 44.5078 52.0625C47.3984 55.724 49.0365 57.7474 49.4219 58.1328C50 58.9036 50.9636 59.0964 52.3125 58.7109C53.2761 58.3255 54.4323 57.7474 55.7813 56.9766C57.3229 56.013 58.3828 55.2422 58.9609 54.6641C59.7318 53.8932 59.7318 52.8333 58.9609 51.4844C58.1901 49.75 57.7083 48.2083 57.5156 46.8594C56.7448 40.1146 56.7448 33.9479 57.5156 28.3594C57.5156 27.5885 57.7083 26.5286 58.0938 25.1797C58.6719 23.8307 59.1537 22.7708 59.5391 22C59.7318 21.0365 59.3464 20.362 58.3828 19.9766C55.6849 19.3984 53.5651 19.1094 52.0234 19.1094C51.0599 19.1094 50.6745 19.4948 50.8672 20.2656C51.0599 22.7708 51.349 25.1797 51.7344 27.4922Z"
              fill="url(#paint0_linear_92_149)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_92_149"
              x="0"
              y="0"
              width="80"
              height="80"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.364706 0 0 0 0 0.556863 0 0 0 0.6 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_149" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_149" result="shape" />
            </filter>
            <filter
              id="filter1_d_92_149"
              x="14.2308"
              y="16.8203"
              width="48.3564"
              height="46.0833"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.619608 0 0 0 0 0.733333 0 0 0 0.67 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_149" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_149" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_92_149" x1="41" y1="-7" x2="41" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF8FB4" />
              <stop offset="0.708333" stopColor="#F25D8E" />
            </linearGradient>
          </defs>
        </svg>
        <p className={style.title}>Nano</p>
        <p className={style.subtitle}>圣地巡礼地点全收录</p>
        <div id={style.navContainer}>
          {navItems.map((item, index) => (
            <img key={index} src={item.default} alt="" onClick={item.onClick} />
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
