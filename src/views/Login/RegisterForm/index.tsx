import React, { useEffect } from 'react';
import Utils from '@/utils';
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
  const [isValidated, setIsValidated] = React.useState(false);

  const isUsename = () => {
    return username.length >= 6;
  };

  const isPassword = () => {
    return password.length >= 6;
  };

  const isConfirmPassword = () => {
    return confirmPassword === password;
  };

  const isMobile = () => {
    return mobile.length === 11;
  };

  const isSms = () => {
    return sms.length === 6;
  };

  useEffect(() => {
    if (isUsename() && isPassword() && isConfirmPassword() && isMobile() && isSms() && isAllowed) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [username, password, confirmPassword, mobile, sms, isAllowed]);

  const onSubmitClick = () => {
    console.log(username, password, confirmPassword, mobile, sms, isAllowed);
    auth?.register({
      username,
      password,
      confirmPassword,
      mobile,
      sms,
      allow: isAllowed,
    });
  };

  return (
    <>
      <div className={formStyle.inputContainer}>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-user" />
          <input type="text" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />
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
          <button disabled={!isMobile()} onClick={() => auth?.getSmsCode(mobile).then((res) => console.log(res))}>
            获取验证码
          </button>
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
      <button className={formStyle.button} onClick={onSubmitClick} disabled={!isValidated}>
        注册
      </button>
    </>
  );
};

export default RegisterForm;
