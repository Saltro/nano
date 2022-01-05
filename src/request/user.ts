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
      nickname: form.nickname,
      password: md5(form.password),
      password2: md5(form.confirmPassword),
      mobile: form.mobile,
      sms_code: form.sms,
      allow: form.allow.toString(),
    },
  );
};

const getUsernameCount = (username: string) => {
  return request.get<{ username: string; count: number; }>(`/user/users/${username}/count/`);
};

const getMobileCount = (mobile: string) => {
  return request.get<{ mobile: string; count: number; }>(`/user/mobiles/${mobile}/count/`);
};

const getSmsCode = (mobile: string) => {
  return request.get<{ message: string }>(`/smscodes/${mobile}/`);
};

const getUserInfo = () => {
  return request.get<IUserInfo>('/user/');
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

const getUserAnimeCollection = () => {
  return request.get<IPageInfo<{ anime: IAnimeInfoBrief }>>('/user/anime/');
};

const getUserPlaceCollection = () => {
  return request.get<IPageInfo<{ place: { id: number; name: string; city: string; address: string } }>>('/user/place/');
};

const checkAnimeCollection = (id: string | undefined) => {
  return request.get(`/anime/${id}/collection/`);
};

const addAnimeCollection = (id: string | undefined) => {
  return request.post<IPageInfo<{ anime: IAnimeInfoBrief }>>(`/anime/${id}/collection/`);
};

const deleteAnimeCollection = (id: string | undefined) => {
  return request.delete<IPageInfo<{ anime: IAnimeInfoBrief }>>(`/anime/${id}/collection/`);
};

const changeAvatar = (avatar: File) => {
  const formData = new FormData();
  formData.append('avatar', avatar);
  return request.put<{ avatar: string }>('/user/', formData);
};

const changeNickname = (nickname: string) => {
  const formData = new FormData();
  formData.append('nickname', nickname);
  return request.put<{ nickname: string }>('/user/', formData);
};

export default {
  login,
  getUserInfo,
  refresh,
  register,
  getUsernameCount,
  getMobileCount,
  getSmsCode,
  getUserAnimeCollection,
  getUserPlaceCollection,
  checkAnimeCollection,
  addAnimeCollection,
  deleteAnimeCollection,
  changeAvatar,
  changeNickname,
};
