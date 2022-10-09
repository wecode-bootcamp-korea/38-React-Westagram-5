import React from 'react';
import './Login.scss';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from './Input.js';
import Button from './Button.js';

const Login = () => {
  const navigate = useNavigate();

  const [saveUserId, setSaveUserId] = useState('');
  const [saveUserPassword, setSaveUserPassword] = useState('');

  return (
    <>
      <div className="login-page">
        <div className="midDiv">
          <h1>Westagram</h1>
          <div className="totalForm">
            <div>
              <Input
                setSaveUserId={setSaveUserId}
                setSaveUserPassword={setSaveUserPassword}
                saveUserId={saveUserId}
                saveUserPassword={saveUserPassword}
              />
            </div>
            <Button
              setSaveUserId={setSaveUserId}
              setSaveUserPassword={setSaveUserPassword}
              saveUserId={saveUserId}
              saveUserPassword={saveUserPassword}
              navigate={navigate}
            />
          </div>
          <a
            href="https://www.instagram.com/accounts/password/reset/"
            className="forgetpassword"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
