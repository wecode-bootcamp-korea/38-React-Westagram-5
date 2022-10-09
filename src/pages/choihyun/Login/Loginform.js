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
      ? navigate('/mainhyun')
      : alert('id와 password를 올바르게 다시 입력하세요.');
    // document.querySelectorAll('input')[0].value = ""
    setInputId('');
    setInputPwd('');
  };

  const totalValudation = event => {
    event.key == 'Enter' ? successLogin() : console.log();
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
    </>
  );
};

export default Loginform;
