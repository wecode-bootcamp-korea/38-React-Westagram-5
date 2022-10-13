import React from 'react';

const Loginform = ({
  idInput,
  setInputId,
  pwdInput,
  setInputPwd,
  navigate,
}) => {
  const successLogin = () => {
    idInput.includes('@') && pwdInput.length > 5
      ? // ? navigate(./Mainhyun)
        loginfetch()
      : alert('id와 password를 올바르게 다시 입력하세요.');
    // document.querySelectorAll('input')[0].value = ""
    setInputId('');
    setInputPwd('');
  };

  const totalValudation = event => {
    event.key == 'Enter' ? successLogin() : console.log();
  };
  const loginfetch = () => {
    fetch('http://10.58.52.130:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: idInput,
        password: pwdInput,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        // if (data.message === 'SUCCESS') {
        localStorage.setItem('token', data.accessToken);
        alert('로그인 성공');
        console.log('success!');
        // } else if (data.message === 'INVALIDU_USER_ID') {
        //   alert('아이디 혹은 비밀번호를 확인 해 주세요');
        // }
      });
  };
  const signupfetch = () => {
    fetch('http://10.58.52.130:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: idInput,
        password: pwdInput,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <>
      <div className="inputBox">
        <input
          type="text"
          id="id"
          name="id"
          className="LogInInput"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={event => setInputId(event.target.value)}
          value={idInput}
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
      <button id="signup" onClick={signupfetch}>
        회원가입
      </button>
    </>
  );
};

export default Loginform;
