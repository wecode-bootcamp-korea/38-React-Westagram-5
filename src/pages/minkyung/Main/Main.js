import React from "react";
import "./Main.scss"
import { useState } from "react";
import "../Login/Login"

function Main () {
	const [reply,setReply] = useState('');
	const replyreplace = reply.replace(/ /g,'');
	const isreplyempty = (replyreplace<=0 ? true :false);
	const resultColor = (  isreplyempty ? '#9C9C9C': 'blue'  )
	const saveReply = (event) => {setReply(event.target.value);};




// console.log(saveReply)

	//댓글구현
	const [replyArray, setReplyArray] = useState([]);


	const registReply = event =>{
		event.preventDefault();
		if(reply === ''){
			return;
		}
		setReplyArray(replyValueList => [...replyValueList,reply]);
		setReply('');
	}

	const deleteReply = event =>{
		replyArray.pop(1)
	}


	return (
	<nav>
        <div className="topbar">
			<div className="westaicontext">
      			<div className="westaicon">      
        			<i className="fa-brands fa-instagram">&nbsp;&nbsp;</i></div>
      			<div className="westatext">westagram  </div>
		    </div>
		
            <div className="finder">
             <i className="fa-solid fa-magnifying-glass"></i><input type="text" placeholder= "검색" /> 
			</div>

   		   <div className="icon">
  		    <div className="c-1"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"  alt="profile"/></div>
     		<div className="c-2"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"  alt="profile"/></div>
      		<div className="c-3"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"  alt="profile"/></div>
    	   </div>  
		 </div>
		
		 <div className = "mains">                                                                
 			 <div className="content">
   				 <div className ="main_content">
     				 <div className="main">
      				  <img className="profile-o" src="images/pexels-derek-randolph-12930643.jpg"  alt="profile"/>
       					<div className="main_text">&nbsp;&nbsp;jjj_mj</div>  
        				<div className="main_icon"><i className="fa-solid fa-ellipsis"></i></div>
					 </div>
      				<div className="main-img"><img className="main_img" src="images/pexels-arthouse-studio-4344533.jpg"  alt="profile"/></div>
      				<div className="in-icon">
       					<div className="inicon-1">
         					<div className="ic-1"><i className="fa-regular fa-heart"></i></div>
          					<div className="ic-2"><i className="fa-regular fa-comment"></i></div>
              				<div className="ic-3"><i className="fa-solid fa-arrow-up-from-bracket"></i></div>
        				</div>
        				<div className="inicon-2">
          					<div className="ic-4"><i className="fa-regular fa-bookmark"></i></div>
       					</div>
      				</div>
     				 <div className ="extra">
      				  <div className ="likes">
       					 aineworld님 외 10명이 좋아합니다
       				  </div>
      
       				  <div className ="text">
         				 <div className = "mid">
        				   	<div className ="mid_1"> wecode&nbsp;</div> <div className = "mid_2"> dream room</div>
        				   	<div className = "mlikes"></div>
        				  	</div>
							<div className = "w_reply">
								{replyArray.map((sth=> (
									<div className = "w_replyArray">
									<div className ="w_reply_id"> ys_dd002 </div> 
									<div className = "w_reply_txt" key={sth}>{sth} </div>
									<div className = "w_icon"> <i className="fa-regular fa-heart" />&nbsp; </div>
									<div className= "w_delete" onClick={deleteReply}> &nbsp;삭제&nbsp; </div>
									</div>
								)))}
						    </div>
      				  </div>
        			 <form className = "reply" onSubmit={registReply}>
         				 <input id="reply" 
						 type="text" 
						 value={reply}
						 onChange={saveReply}  
						 placeholder="댓글달기.." 
						 
						 />
          				 <button className ="replybutton"
						 style={{ color : resultColor}}
						 onClick={registReply}
						 >게시</button>
     				 </form>
     			 </div>
  			  </div>
   			 </div>
  
  <div className ="sidebar">
    <div className="you">
      <img className="profile-i" src ="images/girl-gbeeb67702_1280.jpg" alt="profile" /> 
      <div className="yall">
      <div className="yname">ys_dd002</div>
      <div className="ycontent">flower</div>
      </div>
    </div>
    <div className="story">
      <div className= "s_main">
        <div className="story_story">스토리</div>
        <div className="story_all">모두 보기</div>
      </div>
      <div className="story_icons">
       <div className="story_icon"> <img className="profile-1" src="images/pexels-djordje-cvetkovic-6389849.jpg"  alt="profile"/><div className="profile-5"> dd_ss003</div></div>
       <div className="story_icon"> <img className="profile-2" src="images/cat-g69fa01b87_1920.jpg"  alt="profile"/><div className="profile-5">hihi_0222</div></div>
       <div className="story_icon"><img className="profile-3" src="images/pexels-si-luan-pham-8778462.jpg"  alt="profile"/><div className="profile-5">dkik</div></div>
       <div className="story_icon"><img className="profile-4" src="images/fashion-g776ec8afd_1920.jpg"  alt="profile"/><div className="profile-5">leeo</div></div>
      </div>
    </div>
    <div className="foryou"></div>
  </div>
</div>
</nav>
	
		) ;
}

export default Main;