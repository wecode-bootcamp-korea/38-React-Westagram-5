import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginHyun = () => {
  let [idInput, setInputId] = useState('');
  let [pwdInput, setInputPwd] = useState('');
  let navigate = useNavigate();

  const successLogin = () => {
    idInput.includes('@') && pwdInput.length > 5
      ? navigate('/mainhyun')
      : alert('id와 password를 올바르게 입력하세요.');
    // document.querySelectorAll('input')[0].value = ""
    setInputId('');
    setInputPwd('');
  };

  const totalValudation = event => {
    event.key == 'Enter' ? successLogin() : console.log();
  };

  return (
    <div className="LogInContainer">
      <div className="LoginBox">
        <h1 className="logo">Westagram</h1>
        <div className="inputBox">
          <input
            type="text"
            id="id"
            name="id"
            value={idInput}
            className="LogInInput"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={event => setInputId(event.target.value)}
          />
          <input
            type="password"
            id="password"
            className="LogInInput"
            value={pwdInput}
            placeholder="비밀번호"
            onChange={event => setInputPwd(event.target.value)}
            onKeyDown={totalValudation}
          />
        </div>
        {idInput.length > 0 && pwdInput.length > 0 ? (
          <button id="LogInButton" onClick={successLogin}>
            로그인
          </button>
        ) : (
          <button id="LogInButton" disabled>
            로그인
          </button>
        )}
        <a id="ForgotPassword" href="https://www.naver.com">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginHyun;
