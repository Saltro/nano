import { request } from './instance';
import md5 from 'blueimp-md5';

const login = (form: ILoginRequest) => {
  return request.post<{ username: string; access: string; id: number; refresh: string }>('/user/login/', {
    username: form.username,
    password: md5(form.password),
  });
};

const register = (form: IRegisterRequest) => {
  return request.post<{ username: string; access: string; id: number; refresh: string; mobile: string }>(
    '/user/register/',
    {
      username: form.username,
      password: md5(form.password),
      password2: md5(form.confirmPassword),
      mobile: form.mobile,
      sms_code: form.sms,
      allow: form.allow.toString(),
    },
  );
};

const getSmsCode = (mobile: string) => {
  return request.get<{ message: string }>(`/smscodes/${mobile}`);
};

const getUserInfo = () => {
  return request.get<UserInfo>('/user/');
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

export default { login, getUserInfo, refresh, register, getSmsCode };
