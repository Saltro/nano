import React from 'react';
import MineLayout from '@/layouts/MineLayout';
import { useAuth } from '@/context/AuthContainer';
import style from './index.less';

const Mine: React.FC = () => {
  const auth = useAuth();

  return (
    <MineLayout>
      {{
        sidebar: (
          <>
            <img id={style.avatar} src={auth?.userInfo?.avatar} />
            <span id={style.nickname}>{auth?.userInfo?.username}</span>
          </>
        ),
        content: <div id={style.content} />,
      }}
    </MineLayout>
  );
};

export default Mine;
