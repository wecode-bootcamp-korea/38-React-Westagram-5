import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Loginform from './Loginform.js';

const LoginHyun = () => {
  let [idInput, setInputId] = useState('');
  let [pwdInput, setInputPwd] = useState('');
  let navigate = useNavigate();

  return (
    <div className="LogInContainer">
      <div className="LoginBox">
        <h1 className="logo">Westagram</h1>
        <Loginform
          idInput={idInput}
          setInputId={setInputId}
          pwdInput={pwdInput}
          setInputPwd={setInputPwd}
          navigate={navigate}
        />
        <a id="ForgotPassword" href="https://www.naver.com">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginHyun;
