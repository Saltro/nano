import React from 'react';
import { message } from 'antd';
import Utils from '@/utils';
import Request from '@/request';
import { useAuth } from '@/context/AuthContainer';
import formStyle from '../assets/form.less';
import style from './index.less';

const RegisterForm: React.FC = () => {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [sms, setSms] = React.useState('');
  const [isAllowed, setIsAllowed] = React.useState(false);

  const onSmsClick = () => {
    if (mobile.length === 11) {
      Request.getSmsCode(mobile)
        .then(() => message.success('发送成功'))
        .catch((err) => message.error(err.response.data.message));
    } else {
      message.error('请输入正确的手机号');
    }
  };

  const onSubmitClick = () => {
    const validations = [
      {
        validator: () => username.length >= 6 && username.length <= 16,
        message: '用户名长度不能小于6位且不能长于16位',
      },
      {
        validator: () => password.length >= 6 && password.length <= 24,
        message: '密码长度不能小于6位且不能长于24位',
      },
      {
        validator: () => confirmPassword === password,
        message: '两次密码不一致',
      },
      {
        validator: () => mobile.length === 11,
        message: '请输入正确的手机号',
      },
      {
        validator: () => sms.length === 6,
        message: '请输入正确的六位验证码',
      },
      {
        validator: () => isAllowed,
        message: '请同意用户协议',
      },
    ];

    for (const validation of validations) {
      if (!validation.validator()) {
        message.error(validation.message);
        return;
      }
    }

    auth
      ?.register({
        username,
        password,
        confirmPassword,
        mobile,
        sms,
        allow: isAllowed,
      })
      .then(() => message.success('注册成功'))
      .catch(() => message.error('注册失败'));
  };

  return (
    <>
      <div className={formStyle.inputContainer}>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-user" />
          <input
            type="text"
            placeholder="用户名"
            value={username}
            onChange={(e) => e.target.value.length <= 16 && setUsername(e.target.value)}
          />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => e.target.value.length <= 24 && setPassword(e.target.value)}
          />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="确认密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-mobile" />
          <input
            type="text"
            placeholder="手机号"
            value={mobile}
            onChange={(e) => e.target.value.length <= 11 && setMobile(Utils.filterNumber(e.target.value))}
          />
        </div>
        <div id={style.smsBar}>
          <div className={formStyle.barContainer}>
            <i className="iconfont icon-warning-circle" />
            <input
              type="text"
              placeholder="短信验证码"
              value={sms}
              onChange={(e) => e.target.value.length <= 6 && setSms(Utils.filterNumber(e.target.value))}
            />
          </div>
          <button onClick={onSmsClick}>获取验证码</button>
        </div>
      </div>
      <div className={formStyle.functionBar}>
        <div id={style.accept}>
          <input
            className={formStyle.checkbox}
            type="checkbox"
            checked={isAllowed}
            id="accept-checkbox"
            onChange={() => setIsAllowed(!isAllowed)}
          />
          <label htmlFor="accept-checkbox">我已阅读并同意《Nano服务协议》</label>
        </div>
      </div>
      <button className={formStyle.button} onClick={onSubmitClick}>
        注册
      </button>
    </>
  );
};

export default RegisterForm;
