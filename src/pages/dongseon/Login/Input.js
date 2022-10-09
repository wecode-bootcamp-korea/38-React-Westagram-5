import React from 'react';

const Input = props => {
  const { saveUserId, setSaveUserId, saveUserPassword, setSaveUserPassword } =
    props;
  return (
    <>
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
    </>
  );
};

export default Input;
