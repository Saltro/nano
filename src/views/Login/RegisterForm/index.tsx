import React, { useEffect } from 'react';
import { message, Popover } from 'antd';
import Utils from '@/utils';
import Request from '@/request';
import { useAuth } from '@/context/AuthContainer';
import formStyle from '../assets/form.less';
import style from './index.less';
import { AxiosResponse } from 'axios';

const RegisterForm: React.FC = () => {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [sms, setSms] = React.useState('');
  const [isAllowed, setIsAllowed] = React.useState(false);
  const [usernameCheck, setUsernameCheck] = React.useState(0);
  const [nicknameCheck, setNicknameCheck] = React.useState(0);
  const [passwordCheck, setPasswordCheck] = React.useState(0);
  const [mobileCheck, setMobileCheck] = React.useState(0);
  const [smsState, setSmsState] = React.useState(true);
  const [smsMsg, setSmsMsg] = React.useState('点击获取');
  const [passwordUniformityCheck, setPasswordUniformityCheck] = React.useState(0);

  const falseIcon = (
    <svg
      d="1641048570555"
      className="icon-box"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7338"
      width="20"
      height="20"
    >
      <path
        d="M527.521137 43.544749c-248.424146 0-449.812096 201.379497-449.812096 449.793216s201.387949 449.793216 449.812096 449.793216 449.812096-201.379497 449.812096-449.793216S775.945283 43.544749 527.521137 43.544749zM703.014259 605.430926c22.392926 22.39301 22.391903 58.697867 0 81.089853s-58.698284 22.391986-81.09121 0l-94.124585-94.120634-94.124585 94.120634c-22.392926 22.391986-58.699307 22.391986-81.093257 0-22.392926-22.391986-22.392926-58.696844 0-81.089853l94.124585-94.120634-94.124585-94.119611c-22.392926-22.39301-22.392926-58.697867 0-81.089853 22.393949-22.391986 58.700331-22.391986 81.093257 0l94.124585 94.120634 94.124585-94.120634c22.391903-22.391986 58.698284-22.391986 81.09121 0 22.392926 22.391986 22.392926 58.696844 0 81.089853l-94.123561 94.119611L703.014259 605.430926z"
        p-id="7339"
        fill="#d81e06"
      />
    </svg>
  );

  const usernamePattern = /^[a-zA-Z0-9_]{6,16}$/;
  const nicknamePattern = /^[a-zA-Z0-9_]{6,16}$/;
  const mobilePattern = /^1[3456789]\d{9}$/;
  const passwordPattern = /^[a-zA-Z0-9_]{6,24}$/;

  const handleCountDown = (seconds = 60) => {
    let second = seconds;
    const countDown = () => {
      if (second > 0) {
        second--;
        setSmsMsg(`${second}秒后重试`);
        setSmsState(false);
      }
      if (second === 0) {
        second = 60;
        setSmsMsg('点击获取');
        setSmsState(true);
        return;
      }
      setTimeout(countDown, 1000);
    };
    setTimeout(countDown, 1000);
  };

  const onSmsClick = () => {
    if (mobileCheck > 0) {
      Request.getSmsCode(mobile)
        .then(() => {
          message.success('发送成功');
          handleCountDown(60);
        })
        .catch((err) => message.error(err.response.data.message));
    } else if (mobileCheck === -1) {
      message.error('手机号已存在');
    }else {
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
        validator: () => nickname.length >= 6 && nickname.length <= 16,
        message: '昵称长度不能小于6位且不能长于16位',
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
        nickname,
        password,
        confirmPassword,
        mobile,
        sms,
        allow: isAllowed,
      })
      .then(() => message.success('注册成功'))
      .catch((err) => message.error(err.response.data.detail));
  };

  const checkPasswordUniformity = (value1: string, value2: string) => {
    if (value2 === '') setPasswordUniformityCheck(0);
    else if (value1 === value2) setPasswordUniformityCheck(1);
    else setPasswordUniformityCheck(-1);
  };

  const checkWithAPICount = (
    setFunction: React.Dispatch<React.SetStateAction<number>>,
    pattern: RegExp,
    apiCall: (_: string) => Promise<AxiosResponse<{ count: number }>>,
    value: string,
    // eslint-disable-next-line max-params
  ) => {
    if (value === '')
      // 无内容
      setFunction(0);
    else if (pattern.test(value))
      // 检测
      apiCall(value).then((res) => {
        if (res.data.count === 0) setFunction(1);
        // 可用
        else setFunction(-1); // 重复
      });
    else setFunction(-2); // 不规范
  };

  const checkWithRegExp = (
    setFunction: React.Dispatch<React.SetStateAction<number>>,
    pattern: RegExp,
    value: string,
  ) => {
    if (value === '')
      // 无内容
      setFunction(0);
    else if (pattern.test(value))
      // 通过检测
      setFunction(1);
    else setFunction(-2); // 不符合
  };

  const iconWithRegExpCheck = (valueCheck: number, msg: string) => {
    if (valueCheck === -2)
      return (
        <div>
          <Popover content={msg}>
            <div className={formStyle.iconBox}>{valueCheck < 0 ? falseIcon : <span />}</div>
          </Popover>
        </div>
      );
    return (
      <div>
        <div className={formStyle.iconBox}>{valueCheck < 0 ? falseIcon : <span />}</div>
      </div>
    );
  };
  const msgWithRegExpCheck = (valueCheck: number, name: string) => {
    return <div className={formStyle.msgBox}>{valueCheck === -2 && name + '不规范'}</div>;
  };

  useEffect(() => {
    console.log({ usernameCheck, mobileCheck, passwordUniformityCheck });
  }, [usernameCheck, mobileCheck, passwordUniformityCheck]);

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
            onBlur={(e) =>
              checkWithAPICount(setUsernameCheck, usernamePattern, Request.getUsernameCount, e.target.value)
            }
          />
          {iconWithRegExpCheck(usernameCheck, '用户名仅能包含字母、数字、下划线，且长度不能小于6位且不能长于16位')}
          <div className={formStyle.msgBox}>
            {usernameCheck === -1 ? '用户名已存在' : usernameCheck === -2 ? '用户名不规范' : ''}
          </div>
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-user" />
          <input
            type="text"
            placeholder="昵称"
            value={nickname}
            onChange={(e) => e.target.value.length <= 16 && setNickname(e.target.value)}
            onBlur={(e) => checkWithRegExp(setNicknameCheck, nicknamePattern, e.target.value)}
          />
          {iconWithRegExpCheck(nicknameCheck, '昵称仅能包含字母、数字、下划线，且长度不能小于6位且不能长于16位')}
          {msgWithRegExpCheck(nicknameCheck, '昵称')}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => e.target.value.length <= 24 && setPassword(e.target.value)}
            onBlur={(e) => {
              checkWithRegExp(setPasswordCheck, passwordPattern, e.target.value);
              checkPasswordUniformity(e.target.value, confirmPassword);
            }}
          />
          {iconWithRegExpCheck(passwordCheck, '密码仅能包含字母、数字、下划线，且长度不能小于6位且不能长于24位')}
          {msgWithRegExpCheck(passwordCheck, '密码')}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="确认密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={(e) => checkPasswordUniformity(password, e.target.value)}
          />
          {iconWithRegExpCheck(
            passwordUniformityCheck,
            '密码仅能包含字母、数字、下划线，且长度不能小于6位且不能长于24位',
          )}
          {passwordUniformityCheck === -1 && <div className={formStyle.msgBox}>密码不一致</div>}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-mobile" />
          <input
            type="text"
            placeholder="手机号"
            value={mobile}
            onChange={(e) => e.target.value.length <= 11 && setMobile(Utils.filterNumber(e.target.value))}
            onBlur={(e) => checkWithAPICount(setMobileCheck, mobilePattern, Request.getMobileCount, e.target.value)}
          />
          {iconWithRegExpCheck(mobileCheck, '请输入正确的手机号')}
          <div className={formStyle.msgBox}>
            {mobileCheck === -1 ? '手机号已存在' : mobileCheck === -2 ? '手机号不规范' : ''}
          </div>
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
          <button onClick={onSmsClick} disabled={!smsState}>
            {smsMsg}
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
      <button className={formStyle.button} onClick={onSubmitClick}>
        注册
      </button>
    </>
  );
};

export default RegisterForm;
