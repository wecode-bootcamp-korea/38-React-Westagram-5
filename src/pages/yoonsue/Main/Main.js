import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../yoonsue/Main/Feeds';
import './Main.scss';

function MainSue() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setUserData(result));
  });

  return (
    <div className="body">
      <Nav />
      <main>
        <div className="main">
          <div className="aligning-feeds">
            {userData.map(el => {
              return (
                <Feeds
                  key={el.id}
                  userID={el.userID}
                  img={el.contentImg}
                  likes={el.countLikes}
                  text={el.contentText}
                />
              );
            })}
          </div>
          <div className="main_right">
            <aside>
              <div className="self_profile">
                <img
                  src={require('../../../assets/images/yoonsue/profile.JPG')}
                  alt="Profile"
                ></img>
                <div>
                  <div>hotchocomite</div>
                  <div>안녕하세용</div>
                </div>
              </div>
              <div className="story">
                <div className="header">
                  <span>스토리</span>
                  <span>모두 보기</span>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
              </div>
              <div className="recommend">
                <div className="header">
                  <span>스토리</span>
                  <span>모두 보기</span>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
              </div>
            </aside>
            <footer>
              {ASIDE_LIST.map(el => {
                return (
                  <span className="constdata" key={el.id}>
                    {el.menuName} ·
                  </span>
                );
              })}
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSue;

const ASIDE_LIST = [
  { id: 1, menuName: '소개' },
  { id: 2, menuName: '도움말' },
  { id: 3, menuName: '홍보 센터' },
  { id: 4, menuName: 'API' },
  { id: 5, menuName: '채용 정보' },
  { id: 6, menuName: '개인정보처리방침' },
  { id: 7, menuName: '약관' },
  { id: 8, menuName: '위치' },
  { id: 9, menuName: '인기 계정' },
  { id: 10, menuName: '해시태그' },
  { id: 11, menuName: '언어' },
];
