import React, { useEffect } from 'react';
import '../Main/Main.scss';
import { useState } from 'react';
// import "../Login/Login";
import { useNavigate } from 'react-router-dom';

function Main() {
  const [userInfoList, setUserInfoList] = useState([]);
  const [reply, setReply] = useState('');
  const [replyArray, setReplyArray] = useState([]);
  const navigate = useNavigate('');

  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

  const replyreplace = reply.replace(/ /g, '');
  const isreplyempty = replyreplace <= 0 ? true : false;
  const resultColor = isreplyempty ? '#9C9C9C' : 'blue';

  //댓글구현

  const saveReply = e => {
    setReply(e.target.value);
  };

  const replySet = event => {
    event.preventDefault();
    if (reply === '') {
      return;
    } else {
      setReplyArray(replyList => [...replyList, reply]);
      setReply('');
    }
  };

  return (
    <nav>
      <div className="topbar">
        <div className="westaicontext">
          <div className="westaicon">
            <i className="fa-brands fa-instagram">&nbsp;&nbsp;</i>
          </div>
          <div className="westatext">westagram </div>
        </div>

        <div className="finder">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="검색" />
        </div>

        <div className="icon">
          <div className="c-1">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="profile"
            />
          </div>
          <div className="c-2">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="profile"
            />
          </div>
          <div
            className="c-3"
            onClick={() => {
              navigate('/Singup');
            }}
          >
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <div className="mains">
        <div className="content">
          {userInfoList.map(userInfoList => (
            <div className="main_content" key={userInfoList.id}>
              <div className="main">
                <img
                  className="profile-o"
                  src="images/minkyung/pexels-derek-randolph-12930643.jpg"
                  alt="profile"
                />
                <div className="main_text" key={AsideData.id}>
                  &nbsp;&nbsp;{userInfoList.username}
                </div>
                <div className="main_icon">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              <div className="main-img">
                <img
                  className="main_img"
                  src="images/minkyung/pexels-arthouse-studio-4344533.jpg"
                  alt="profile"
                />
              </div>
              <div className="in-icon">
                <div className="inicon-1">
                  <div className="ic-1">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="ic-2">
                    <i className="fa-regular fa-comment"></i>
                  </div>
                  <div className="ic-3">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  </div>
                </div>
                <div className="inicon-2">
                  <div className="ic-4">
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                </div>
              </div>
              <div className="extra">
                <div className="likes">aineworld님 외 10명이 좋아합니다</div>

                <div className="text">
                  <div className="mid">
                    <div className="mid_1"> wecode&nbsp;</div>{' '}
                    <div className="mid_2"> dream room</div>
                    <div className="mlikes"></div>
                  </div>
                  <div className="w_reply">
                    {replyArray.map(sth => (
                      <form onSubmit={replySet} key={sth}>
                        <div className="w_replyArray">
                          <div className="w_reply_id"> ys_dd002 </div>
                          <div className="w_reply_txt">{sth} </div>
                          <div className="w_icon">
                            {' '}
                            <i className="fa-regular fa-heart" />
                            &nbsp;{' '}
                          </div>
                          <div className="w_delete"> &nbsp;삭제&nbsp; </div>
                        </div>
                      </form>
                    ))}
                  </div>
                </div>
                <form className="reply">
                  <input
                    id="reply"
                    type="text"
                    placeholder="댓글달기.."
                    onChange={saveReply}
                    value={reply}
                  />
                  <button
                    className="replybutton"
                    style={{ color: resultColor }}
                    onClick={replySet}
                  >
                    게시
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <div className="you">
            <img
              className="profile-i"
              src="images/minkyung/girl-gbeeb67702_1280.jpg"
              alt="profile"
            />
            <div className="yall">
              <div className="yname">ys_dd002</div>
              <div className="ycontent">flower</div>
            </div>
          </div>
          <div className="story">
            <div className="s_main">
              <div className="story_story">스토리</div>
              <div className="story_all">모두 보기</div>
            </div>
            <div className="story_icons">
              {userInfoList.map(userInfoList => (
                <div className="story_icon">
                  <img
                    className="profile-other"
                    src={userInfoList.src}
                    alt="profile"
                  />
                  <div className="profile-5" key={userInfoList.id}>
                    {' '}
                    {userInfoList.username}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="AD">
            {AsideData.map(AsideData => (
              <div className="asideData" key={AsideData.id}>
                &nbsp;{AsideData.dataName}&nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

const AsideData = [
  { id: 1, dataName: '소개' },
  { id: 2, dataName: '도움말' },
  { id: 3, dataName: '홍보센터' },
  { id: 4, dataName: 'API' },
  { id: 5, dataName: '채용 정보' },
  { id: 6, dataName: '개인정보처리방침' },
  { id: 7, dataName: '약관' },
  { id: 8, dataName: '위치' },
  { id: 9, dataName: '인기계정' },
  { id: 10, dataName: '해시태그' },
  { id: 11, dataName: '언어' },
];

export default Main;
