import React, { useState } from 'react';
import './Main.scss';
import Maincommentform from './Maincomment.js';

const MainHyun = () => {
  let [commentInput, setCommentIput] = useState('');
  let [commentInputArr, setCommentIputArr] = useState([]);

  return (
    <>
      <div className="nav">
        <div className="logoWrap">
          <i id="logoIcon" className="fa-brands fa-instagram fa-2x" />
          <h1 id="logoName">Westagram</h1>
        </div>
        <div className="searchWrap">
          <i className="fa-solid fa-magnifying-glass" />
          <input className="search" placeholder="검색" />
        </div>
        <div className="naviconWrap">
          <i className="fa-regular fa-compass fa-2x" />
          <i className="fa-regular fa-heart fa-2x" />
          <i id="visibleMenu" className="fa-regular fa-user fa-2x" />
          <div className="profileMenu">
            <div style={{ borderBottom: '1px solid #e0e0e0' }}>
              <ul>
                <li>
                  <a className="itemWrap">
                    <i className="fa-regular fa-user" />
                    <p>프로필</p>
                  </a>
                </li>
                <li>
                  <a className="itemWrap">
                    <i className="fa-regular fa-bookmark" />
                    <p>저장됨</p>
                  </a>
                </li>
                <li>
                  <a className="itemWrap">
                    <i className="fa-regular fa-wrench" />
                    <p>설정</p>
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ padding: 10, borderBottom: '1px solid #e0e0e0' }}>
              <a href="login.html" className="logout">
                로그아웃
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="feeds">
          <div className="article">
            <div className="feedWrap">
              <div className="account">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/profile-insta.jpeg')}
                  className="profile"
                />
                <h3>hyun._.gus</h3>
              </div>
              <div className="dot">
                <h2>…</h2>
              </div>
            </div>
            <div className="imgWrap">
              <img
                src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/7star-insta.jpeg')}
                className="stars7"
              />
              {/* <div className="stars7"></div> */}
            </div>
            <div className="feedIcon">
              <div className="leftIconWrap">
                <i
                  className="fa-solid fa-heart fa-2x"
                  style={{ color: 'red' }}
                />
                <i className="fa-regular fa-message fa-2x" />
                <i className="fa-solid fa-arrow-up-from-bracket fa-2x" />
              </div>
              <div className="rightIconWrap">
                <i className="fa-regular fa-bookmark fa-2x" />
              </div>
            </div>
            <Maincommentform
              commentInput={commentInput}
              setCommentIput={setCommentIput}
              commentInputArr={commentInputArr}
              setCommentIputArr={setCommentIputArr}
            />
          </div>
        </div>
        <div className="main-right">
          <div className="userInfoWrap">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/profile-insta.jpeg')}
              className="profile"
            />
            <div className="nicknameAndName">
              <h3>hyun._.gus</h3>
              <p>위코드 38기 최현</p>
            </div>
          </div>
          <div className="storyWrap">
            <div className="storyNav">
              <span>스토리</span>
              <p>모두 보기</p>
            </div>
            <div className="userWrap">
              <div className="userN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user1.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>hyun._.gus</h4>
                  <p>5분 전</p>
                </div>
              </div>
              <div className="userN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user2.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>yougettheswag</h4>
                  <p>16분 전</p>
                </div>
              </div>
              <div className="userN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>Front_end_devloper</h4>
                  <p>2시간 전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="suggestWrap">
            <div className="suggestNav">
              <span>회원님을 위한 추천</span>
              <p>모두 보기</p>
            </div>
            <div className="suggestUserWrap">
              <div className="suggestUserN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>we123</h4>
                  <p>abcdefg님 외..</p>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="suggestUserN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>co123</h4>
                  <p>yougettheswag 님 외..</p>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="suggestUserN">
                <img
                  src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
                  className="rightProfile"
                  alt="user1"
                />
                <div className="userIdTime">
                  <h4>de123</h4>
                  <p>sukgodang 님 외..</p>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainHyun;
