import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
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
  // const loginAuthorization = () => {
  //   fetch('http://10.58.52.130:3000/auth/signin', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email: id, password: pw }),
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       localStorage.setItem('TOKEN', data.accessToken);
  //       alert('로그인 성공');
  //     });
  // };
  // console.log(localStorage.getItem('TOKEN'));
  // const onKeyDown = e => {
  //   if (e.key === 'Enter' && id.includes('@') && pw.length > 5)
  //     loginAuthorization();
  //   // navigateToMain();
  // };
  const onSubmit = e => {
    e?.preventDefault();
    if (id.includes('@') && pw.length > 5) navigateToMain();
    // loginAuthorization();
  };

  return (
    <div className="body">
      <div className="container">
        <div className="logo">Westagram</div>
        <div>
          <div>
            <form className="container1" action="submit" onSubmit={onSubmit}>
              <Input
                onChange={saveUserId}
                value={id}
                className="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <Input
                onChange={saveUserPw}
                value={pw}
                className="pw"
                type="password"
                placeholder="비밀번호"
              />
              <Button
                onInputChange={!(id.includes('@') && pw.length > 5)}
                onClick={onSubmit}
              />
              <div className="horizontalline"></div>
              <div>비밀번호를 잊으셨나요?</div>
            </form>
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

function Input({ onChange, value, placeholder, className, type }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
}

export default LoginSue;
