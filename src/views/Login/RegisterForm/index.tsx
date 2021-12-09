import React from 'react';
import formStyle from '../assets/form.less';
import style from './index.less';

const RegisterForm: React.FC = () => {
  return (
    <>
      <div className={formStyle.inputContainer}>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-user" />
          <input type="text" placeholder="用户名" />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input type="password" placeholder="密码" />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-lock" />
          <input type="password" placeholder="确认密码" />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-mobile" />
          <input type="text" placeholder="手机号" />
        </div>
        <div className={formStyle.barContainer}>
          <i className="iconfont icon-warning-circle" />
          <input type="text" placeholder="短信验证码" />
        </div>
      </div>
      <div className={formStyle.functionBar}>
        <div id={style.accept}>
          <input className={formStyle.checkbox} type="checkbox" id="accept-checkbox" />
          <label htmlFor="accept-checkbox">我已阅读并同意《Nano服务协议》</label>
        </div>
      </div>
      <button className={formStyle.button}>注册</button>
    </>
  );
};

export default RegisterForm;
