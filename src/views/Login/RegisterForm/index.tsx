import React, { useEffect } from 'react';
import { message } from 'antd';
import Utils from '@/utils';
import Request from '@/request';
import { useAuth } from '@/context/AuthContainer';
import formStyle from '../assets/form.less';
import style from './index.less';

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
  const [passwordUniformityCheck, setPasswordUniformityCheck] = React.useState(0);

  const trueIcon = (
    <svg
      d="1641047730020"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7090"
      width="20"
      height="20"
    >
      <path
        d="M529.523831 48.306192c-248.375025 0-449.722041 201.338564-449.722041 449.703165s201.347015 449.703165 449.722041 449.703165 449.722041-201.338564 449.722041-449.703165S777.898856 48.306192 529.523831 48.306192zM747.172798 477.358015 525.78349 698.738032c-11.277308 11.276834-26.081076 16.841573-40.862332 16.758686-14.781255 0.083911-29.586047-5.481851-40.863355-16.758686L327.279338 581.964468c-22.387809-22.387893-22.387809-58.685587 0-81.072457 22.388833-22.388916 58.68805-22.388916 81.07586 0l76.56596 76.561723L666.095915 396.285558c22.388833-22.388916 58.68805-22.388916 81.07586 0C769.561631 418.673451 769.561631 454.971146 747.172798 477.358015z"
        p-id="7091"
        fill="#ABC45A"
      />
    </svg>
  );

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
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;

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

  const checkUsernameCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '')
      // 无内容
      setUsernameCheck(0);
    else if (usernamePattern.test(e.target.value))
      // 通过检测
      Request.getUsernameCount(e.target.value).then((res) => {
        if (res.data.count === 0) setUsernameCheck(1);
        // 可用
        else setUsernameCheck(-1); // 不可用
      });
    else setUsernameCheck(-2); // 不符合
  };

  const checkPasswordUniformity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setPasswordUniformityCheck(0);
    else if (e.target.value === password) setPasswordUniformityCheck(1);
    else setPasswordUniformityCheck(-1);
  };

  const checkMobileCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '')
      // 无内容
      setUsernameCheck(0);
    else if (mobilePattern.test(e.target.value))
      // 检测
      Request.getMobileCount(e.target.value).then((res) => {
        if (res.data.count === 0) setMobileCheck(1);
        // 可用
        else setMobileCheck(-1); // 重复
      });
    else setMobileCheck(-2); // 不规范
  };

  const checkWithRegExp = (setFunction: React.Dispatch<React.SetStateAction<number>>, pattern: RegExp, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '')
      // 无内容
      setFunction(0);
    else if (pattern.test(e.target.value))
      // 通过检测
      setFunction(1);
    else setFunction(-2); // 不符合
  };

  const msgWithRegExpCheck = (valueCheck: number, name: string) =>
  {
      return (
    <div>
      <div className={formStyle.iconBox}>
        {valueCheck < 0 ? falseIcon : valueCheck > 0 ? trueIcon : <span />}
      </div>
      {valueCheck === -2 && <div className={formStyle.msgBox}>{name}不规范</div>}
    </div>
      );
  }

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
            onBlur={checkUsernameCount}
          />
          <div className={formStyle.iconBox}>{usernameCheck < 0 ? falseIcon : usernameCheck > 0 ? trueIcon : ''}</div>
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
            onBlur={(e) => checkWithRegExp(setNicknameCheck, nicknamePattern, e)}
          />
          {msgWithRegExpCheck(nicknameCheck, '昵称')}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => e.target.value.length <= 24 && setPassword(e.target.value)}
            onBlur={(e) => checkWithRegExp(setPasswordCheck, passwordPattern, e)}
          />
          {msgWithRegExpCheck(passwordCheck, '密码')}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input
            type="password"
            placeholder="确认密码"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={checkPasswordUniformity}
          />
          <div className={formStyle.iconBox}>
            {passwordUniformityCheck < 0 ? falseIcon : passwordUniformityCheck > 0 ? trueIcon : <span />}
          </div>
          {passwordUniformityCheck === -1 && <div className={formStyle.msgBox}>密码不一致</div>}
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-mobile" />
          <input
            type="text"
            placeholder="手机号"
            value={mobile}
            onChange={(e) => e.target.value.length <= 11 && setMobile(Utils.filterNumber(e.target.value))}
            onBlur={checkMobileCount}
          />
          <div className={formStyle.iconBox}>{mobileCheck < 0 ? falseIcon : mobileCheck > 0 ? trueIcon : ''}</div>
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
          <button onClick={onSmsClick}>点击获取</button>
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
