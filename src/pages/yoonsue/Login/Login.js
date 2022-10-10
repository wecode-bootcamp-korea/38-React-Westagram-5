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

function Button(props) {
  const propsFromLoginSue = props;
  return (
    <div className="button">
      <button
        disabled={propsFromLoginSue.onInputChange}
        onClick={propsFromLoginSue.onClick}
      >
        로그인
      </button>
    </div>
  );
}

function Input(props) {
  const propsFromFeeds = props;
  return (
    <input
      onChange={propsFromFeeds.onChange}
      value={propsFromFeeds.value}
      placeholder={propsFromFeeds.placeholder}
      className={propsFromFeeds.className}
      type={propsFromFeeds.type}
      onKeyDown={propsFromFeeds.onKeyDown}
    />
  );
}

export default LoginSue;
