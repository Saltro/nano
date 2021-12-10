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

const register = async (form: IRegisterRequest) => {
  const res = await request.post<{ username: string; access: string; id: number; refresh: string; mobile: string }>(
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
  localStorage.setItem('access', res.data.access);
  localStorage.setItem('refresh', res.data.refresh);
};

const getSmsCode = async (mobile: string) => {
  console.log(mobile);
  const res = await request.get<{ message: string }>(`/smscodes/${mobile}`);
  return res.data.message;
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

export default { login, getUserInfo, refresh, register, getSmsCode };
