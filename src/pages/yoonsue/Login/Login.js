import React from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginSue() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate('');
  const navigateToMain = () => {
    navigate('/Main');
  };

  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangePw = e => {
    setPw(e.target.value);
  };
  const isBtnDisable = () => {
    return id.includes('@') && pw.length > 5 ? false : true;
  };
  const onKeyDown = e => {
    e.key === 'Enter' ? navigateToMain() : console.log();
  };

  return (
    <div className="body">
      <div className="container">
        <div className="logo">Westagram</div>
        <div>
          <div className="container1">
            <input
              onChange={onChangeId}
              value={id}
              className="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={onChangePw}
              value={pw}
              className="pw"
              type="password"
              placeholder="비밀번호"
              onKeyDown={onKeyDown}
            />
            <Button
              onInputChange={isBtnDisable}
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
  return (
    <div className="button">
      <button disabled={props.onInputChange()} onClick={props.onClick}>
        로그인
      </button>
    </div>
  );
}

export default LoginSue;
