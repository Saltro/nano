import { request } from './instance';
import md5 from 'blueimp-md5';

const login = (form: { username: string; password: string }) => {
  request
    .post<{ username: string; access: string; id: number; refresh: string }>('/user/login/', {
      username: form.username,
      password: md5(form.password),
    })
    .then((res) => {
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
    });
};

const getUserInfo = () => {
  request.get<{ username: string; id: number; avatar: string; mobile: string }>('/user/').then((res) => {});
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
      // 如果刷新失败，则重新登录
    });
};

export default { login, getUserInfo, refresh };
