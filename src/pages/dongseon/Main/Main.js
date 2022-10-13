import React, { useState } from 'react';
import './Main.scss';
import dog from '../../../assets/images/dongseon/dog.jpeg';
import Nav from '../../../components/Nav/Nav';
import Aside from './Aside';
import FeedList from './FeedList';

const Main = () => {
  return (
    <>
      <div className="main-page">
        <Nav />

        <main>
          <div className="left-main">
            <FeedList />
          </div>
          <div className="right-main-box">
            <div className="img-text-right-main">
              <img
                className="img1-right-main"
                src="https://as2.ftcdn.net/v2/jpg/05/15/53/81/1000_F_515538183_ZtfSuhz82zwuBIiwQpOBfVmqAer1hWXz.jpg"
                alt="dog"
              />
              <div className="right-main-text">
                <div className="text-right-main">wecode bootcamp</div>
                <div className="text-right-main">WeCode | 위코드</div>
              </div>
            </div>
            <div className="right-main-box1">
              <div className="right-main-span">
                <span className="right-main-span1">스토리</span>
                <span className="right-main-span2">모두 보기</span>
              </div>
              <div className="right-main-text-img">
                <img className="right-main-text-img1" src={dog} alt="dog" />
                <div>
                  <div className="right-main-profile1">_yum_s</div>
                  <div className="right-main-profile1">16분 전</div>
                </div>
              </div>
              <div className="right-main-text-img">
                <img className="right-main-text-img1" src={dog} alt="dog" />
                <div>
                  <div className="right-main-profile1">drink_eat_drink</div>
                  <div className="right-main-profile1">3시간 전</div>
                </div>
              </div>
              <div className="right-main-text-img">
                <img className="right-main-text-img1" src={dog} alt="dog" />
                <div>
                  <div className="right-main-profile1">hyukyc</div>
                  <div className="right-main-profile1">20시간 전</div>
                </div>
              </div>
              <div className="right-main-text-img">
                <img className="right-main-text-img1" src={dog} alt="dog" />
                <div>
                  <div className="right-main-profile1">jminkeek</div>
                  <div className="right-main-profile1">2일 전</div>
                </div>
              </div>
            </div>
            <div className="right-main-box2">
              <div className="right2-main-span">
                <span className="right2-main-span1">회원님을 위한 추천</span>
                <span className="right2-main-span2">모두 보기</span>
              </div>
              <div className="right-bottom-img">
                <img className="right-bottom-img1" src={dog} alt="dog" />
                <div>
                  <div className="right2-main-profile1">joaaaaaahye</div>
                  <div className="right2-main-profile1">
                    _legend_a님 외 2명이...
                  </div>
                </div>
                <div className="right-bottom-text">팔로우</div>
              </div>
              <div className="right-bottom-img">
                <img className="right-bottom-img1" src={dog} alt="dog" />
                <div>
                  <div className="right2-main-profile1">rampart81</div>
                  <div className="right2-main-profile1">
                    ringo.in.seoul님 외 12..
                  </div>
                </div>
                <div className="right-bottom-text">팔로우</div>
              </div>
              <div className="right-bottom-img">
                <img className="right-bottom-img1" src={dog} alt="dog" />
                <div>
                  <div className="right2-main-profile1">shawnjjoo</div>
                  <div className="right2-main-profile1">
                    _legend_a님 외 2명이...
                  </div>
                </div>
                <div className="right-bottom-text">팔로우</div>
              </div>
            </div>
            <div className="asidebar">
              {Aside.map(menu => {
                return <div key={menu.id}>{menu.menulist}•</div>;
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;

// <nav>
//   <div className="total-nav">
//     <div className="left-nav">
//       <img
//         id="instagram-emoticon"
//         alt="instalog"
//         src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
//       />
//       <span className="westa-text">westagram</span>
//     </div>
//     <div className="middle-nav">
//       <input className="nav-input" type="text" placeholder="검색" />
//       <img
//         id="glass-emoticon"
//         src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png"
//         alt="icons"
//       />
//     </div>
//     <div className="right-nav">
//       <img
//         src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
//         alt="explore"
//       />
//       <img
//         src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
//         alt="heart"
//       />
//       <img
//         src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
//         alt="profile"
//       />
//     </div>
//   </div>
// </nav>;
