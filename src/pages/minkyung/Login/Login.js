
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "../Main/Main"

function Login () {
    const navigate=useNavigate();
    const [id, setId] = useState('');
    const saveUserId = (event)=> {
        setId(event.target.value);
    };
    const [pw, setPw] = useState('');
    const saveUserPw = (event)=> {
        setPw(event.target.value);
    };
    const isPW = id.includes('@') && pw.length>=5 ;
    const enterPW = e => {
        if (e.key === 'Enter') {
            clickPW();
        }
    };
    const clickPW = () => {
        return (isPW ?  navigate('/main'): null )
    };
    const BC = ( isPW? 'blue' : '#C0DFFD'  )
    
    // const inputValue = 


    
    return(
     <nav>
            <div className="line">
                <div className="westagram">westagram</div>
                <div className="idpasswordbutton">
                    <div className="id">
                        <input id="id" type="text" value={id} onChange={saveUserId}  onKeyPress = {enterPW} placeholder="전화번호,사용자 이름 또는 이메일" />
                    </div>
                    <div className="password">
                        <input id="pw" type="password" value={pw} onChange={saveUserPw}  onKeyPress = {enterPW} placeholder="비밀번호" />
                    </div>
                    <button className="login"
                    style ={{backgroundColor: BC  }}
                     onClick={ clickPW}              
                    >
                    로그인</button>
                <div className="or">또는</div>
                <div className="facebook"><i className="fa-brands fa-square-facebook"></i>&nbsp;Facebook으로 로그인</div>
                <div className="cc"></div>
                <div className="gotopassword">비밀번호를 잊으셨나요?</div>
            </div>
        </div><div className="sign">
                <div className="sign?">계정이 없으신가요?&nbsp;&nbsp;</div>
                <div className="singin"
                    onClick={ () => {
                        navigate("/Singup");
                    }}
                     > 가입하기</div>
            </div>
               
    </nav> 

           
    ) ;
}


export default Login;