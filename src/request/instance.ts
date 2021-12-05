import axios from 'axios';
import user from './user';

export const request = axios.create({
  baseURL: 'https://api.nano.nagico.cn/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem('access');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    // 在 header 中设置 token
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error.response);
    const data = error.response.data;
    // 如果 access 令牌失效，判断 detail 中是否包含 “此令牌对任何类型的令牌无效”
    if (data.detail?.includes('此令牌对任何类型的令牌无效')) {
      user.refresh();
      // 刷新后重新发送请求
      return request(error.config);
    }
    return Promise.reject(error);
  },
);
