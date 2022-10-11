import React from 'react';

const Button = props => {
  const {
    saveUserId,
    setSaveUserId,
    saveUserPassword,
    setSaveUserPassword,
    navigate,
  } = props;

  const isValid =
    saveUserId.includes('@') && saveUserPassword.includes('12345');

  const successLogin = () => {
    isValid
      ? navigate(`/MainSeon`)
      : alert('id와 password를 다시 확인해주세요.');
    setSaveUserId('');
    setSaveUserPassword('');
  };
  return (
    <button
      type="button"
      onClick={successLogin}
      className="login-button"
      disabled={!isValid}
    >
      로그인
    </button>
  );
};

export default Button;

// {userId.includes('@') > 0 && userPassword.length >= 6 ? (
//   <button
//     type="button"
//     onClick={() => {
//       navigate(`/MainSeon`);
//     }}
//     className="login-button"
//   >
//     로그인
//   </button>
// ) : (
//   <button type="button" className="login-button" disabled>
//     로그인
//     {/* <Link to="/Main"></Link> */}
//   </button>
// )}
