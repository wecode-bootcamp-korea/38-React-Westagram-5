import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [saveUserId, setSaveUserId] = useState('');
  const [saveUserPassword, setSaveUserPassword] = useState('');

  const isValid = saveUserId.includes('@') && saveUserPassword.length > 5;

  const successLogin = () => {
    isValid
      ? navigate(`/MainSeon`)
      : alert('id와 password를 다시 확인해주세요.');
    setSaveUserId('');
    setSaveUserPassword('');
  };
  const signin = () => {
    fetch('http://10.58.52.248:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: saveUserId, password: saveUserPassword }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        console.log(localStorage.getItem('token'));
      });
  };

  const signup = () => {
    fetch('http://10.58.52.248:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: saveUserId, password: saveUserPassword }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
      });
  };

  return (
    <>
      <div className="login-page">
        <div className="midDiv">
          <h1>Westagram</h1>
          <div className="totalForm">
            <div className="idpw-input">
              <input
                className="input-login"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={saveUserId}
                onChange={e => {
                  setSaveUserId(e.target.value);
                }}
              />
              <input
                className="input-password"
                type="password"
                placeholder="비밀번호"
                value={saveUserPassword}
                onChange={e => {
                  setSaveUserPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="button"
              onClick={signin}
              className="login-button"
              disabled={!isValid}
            >
              로그인
            </button>
          </div>
          <div className="right-bottom-sigup">
            <button
              type="button"
              onClick={signup}
              className="signup-button"
              disabled={!isValid}
            >
              회원가입
            </button>
            <a
              href="https://www.instagram.com/accounts/password/reset/"
              className="forgetpassword"
            >
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
