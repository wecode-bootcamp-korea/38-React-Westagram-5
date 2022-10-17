import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';
import '../Main/Main';

function Login() {
  const navigate = useNavigate();
  const [inPutSet, setInPutSet] = useState({ id: '', password: '' });
  const saveInPuSet = e => {
    setInPutSet({ ...inPutSet, [e.target.name]: e.target.value });
  };

  const isPW = inPutSet.id.includes('@') && inPutSet.password.length >= 5;
  const BC = isPW ? 'blue' : '#C0DFFD';
  const goToSingUP = () => {
    navigate('/Singup');
  };

  const enterPW = e => {
    if (e.key === 'Enter') {
      clickLogin();
    }
  };
  const clickLogin = () => {
    if (isPW === true) {
      navigate('/Mainmin');
    } else {
      return null;
    }
  };

  //fetch
  // const clickLogin = () => {
  //   fetch('http://10.58.52.130:3000/auth/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: inPutSet.id,
  //       password: inPutSet.password,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('통신실패');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data => {
  //       // if (data.message === "SUCCESS") {
  //       localStorage.setItem('token', data.accessToken);
  //       //   alert("로그인 성공");
  //       //   console.log("AA");
  //       // } else if (data.message === " INVALIDU_USER_ID") {
  //       //   alert("아이디 혹은 비밀번호를 확인해 주세요");
  //       // }
  //     });
  //   const token = localStorage.getItem('token');
  // };
  // const clickSingUp = () => {
  //   fetch('http://10.58.52.130:3000/auth/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: inPutSet.id,
  //       password: inPutSet.password,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('통신실패');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data => {
  //       if (data.message === 'SUCCESS') {
  //         localStorage.setItem('token', data.token);
  //         alert('로그인 성공');
  //         // console.log("AA");
  //       } else if (data.message === ' INVALIDU_USER_ID') {
  //         alert('아이디 혹은 비밀번호를 확인해 주세요');
  //       }
  //     });
  // const token = localStorage.getItem('token');
  // };
  return (
    <nav>
      <div className="line">
        <div className="westagram">westagram</div>
        <div className="idpasswordbutton">
          <div className="id">
            <input
              id="id"
              type="text"
              name="id"
              value={setInPutSet.id}
              style={{ backgroundColor: '#fafafa' }}
              onChange={saveInPuSet}
              onKeyPress={enterPW}
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
          </div>
          <div className="password">
            <input
              id="pw"
              type="password"
              name="password"
              value={setInPutSet.password}
              style={{ backgroundColor: '#fafafa' }}
              onChange={saveInPuSet}
              onKeyPress={enterPW}
              placeholder="비밀번호"
            />
          </div>
          <button
            className="button"
            style={{ backgroundColor: BC }}
            onClick={clickLogin}
          >
            로그인
          </button>
          <button
            className="button"
            style={{ backgroundColor: BC }}
            // onClick={clickSingUp}
          >
            회원가입
          </button>
          <div className="or">또는</div>
          <div className="facebook">
            <i className="fa-brands fa-square-facebook" />
            &nbsp;Facebook으로 로그인
          </div>
          <div className="cc" />
          <div className="gotopassword">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
      <div className="sign">
        <div className="sign?">계정이 없으신가요?&nbsp;&nbsp;</div>
        <div className="singup" onClick={goToSingUP}>
          가입하기
        </div>
      </div>
    </nav>
  );
}

export default Login;
