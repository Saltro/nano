import React, { useEffect, useMemo } from 'react';
import AuthContext from './context';
import Request from '@/request';

const AuthContainer: React.FC<{}> = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<IUserInfo | null>(null);

  const refreshInfo = () => {
    Request.getUserInfo()
      .then((res) => {
        console.log('首次加载', res);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log('首次加载失败', err);
      });
  };

  const login = (form: ILoginRequest) => {
    return new Promise((resolve, reject) => {
      Request.login(form)
        .then((res) => {
          localStorage.setItem('access', res.data.access);
          localStorage.setItem('refresh', res.data.refresh);
          refreshInfo();
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const register = (form: IRegisterRequest) => {
    return new Promise((resolve, reject) => {
      Request.register(form)
        .then((res) => {
          localStorage.setItem('access', res.data.access);
          localStorage.setItem('refresh', res.data.refresh);
          refreshInfo();
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const logout = () => {
    // 后端暂无手动清除 token 接口，因此登出时直接清空 token
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setUserInfo(null);
  };

  useEffect(() => {
    // 首次进入后获取用户信息
    refreshInfo();
  }, []);

  const value = useMemo(() => {
    // console.log('userInfo改变了', userInfo);
    return {
      userInfo,
      refreshInfo,
      login,
      register,
      logout,
    };
  }, [userInfo]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthContainer;
export { useAuth };
