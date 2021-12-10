import React, { useEffect, useMemo } from 'react';
import AuthContext from './context';
import Request from '@/request';

const AuthContainer: React.FC<{}> = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);

  const login = async (form: ILoginRequest) => {
    await Request.login(form);
    await Request.getUserInfo().then((res) => {
      console.log('登录后获取信息', res);
      setUserInfo(res);
    });
  };

  const register = async (form: IRegisterRequest) => {
    await Request.register(form);
  };

  const logout = () => {
    // 后端暂无手动清除 token 接口，因此登出时直接清空 token
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setUserInfo(null);
  };

  const getSmsCode = async (mobile: string) => {
    return await Request.getSmsCode(mobile);
  };

  useEffect(() => {
    // 首次进入后获取用户信息
    Request.getUserInfo()
      .then((res) => {
        console.log('首次加载', res);
        setUserInfo(res);
      })
      .catch((err) => {
        console.log('首次加载失败', err);
      });
  }, []);

  const value = useMemo(() => {
    // console.log('userInfo改变了', userInfo);
    return {
      userInfo,
      login,
      logout,
      register,
      getSmsCode,
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
