import { request } from './instance';
import md5 from 'blueimp-md5';

const login = async (form: ILoginRequest) => {
  const res = await request.post<{ username: string; access: string; id: number; refresh: string }>('/user/login/', {
    username: form.username,
    password: md5(form.password),
  });
  localStorage.setItem('access', res.data.access);
  localStorage.setItem('refresh', res.data.refresh);
};

const getUserInfo = async () => {
  const res = await request.get<UserInfo>('/user/').then((res) => {
    return res.data;
  });
  return res;
};

const refresh = () => {
  request
    .post<{ access: string }>('/user/refresh/', {
      refresh: localStorage.getItem('refresh'),
    })
    .then((res) => {
      localStorage.setItem('access', res.data.access);
    })
    .catch((err) => {
      console.log(err);
      // 如果刷新失败，则重新登录
    });
};

export default { login, getUserInfo, refresh };
