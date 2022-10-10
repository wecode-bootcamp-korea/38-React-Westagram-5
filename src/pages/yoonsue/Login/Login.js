import React from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginSue() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate('');
  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };
  const navigateToMain = () => {
    navigate('/MainSue');
  };
  const onKeyDown = e => {
    if (e.key === 'Enter' && id.includes('@') && pw.length > 5)
      navigateToMain();
  };

  return (
    <div className="body">
      <div className="container">
        <div className="logo">Westagram</div>
        <div>
          <div className="container1">
            <Input
              onChange={saveUserId}
              value={id}
              className="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onKeyDown={onKeyDown}
            />
            <Input
              onChange={saveUserPw}
              value={pw}
              className="pw"
              type="password"
              placeholder="비밀번호"
              onKeyDown={onKeyDown}
            />
            <Button
              onInputChange={!(id.includes('@') && pw.length > 5)}
              onClick={() => {
                navigate('/MainSue');
              }}
            />
            <div className="horizontalline"></div>
            <div>비밀번호를 잊으셨나요?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ onInputChange, onClick }) {
  return (
    <div className="button">
      <button disabled={onInputChange} onClick={onClick}>
        로그인
      </button>
    </div>
  );
}

function Input({ onChange, value, placeholder, className, type, onKeyDown }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      type={type}
      onKeyDown={onKeyDown}
    />
  );
}

export default LoginSue;
