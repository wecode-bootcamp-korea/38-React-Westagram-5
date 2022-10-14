import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../yoonsue/Main/Feeds';
import Aside from './Aside';

import './Main.scss';

function MainSue() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('/images/yoonsue/yoonsuedata.json')
      .then(response => response.json())
      .then(result => setUserData(result));
  });
  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    fetch('/images/yoonsue/yoonsuestory.json')
      .then(response => response.json())
      .then(result => setStoryData(result));
  });
  const [recommendData, setRecommendData] = useState([]);
  useEffect(() => {
    fetch('/images/yoonsue/yoonsuerecommend.json')
      .then(response => response.json())
      .then(result => setRecommendData(result));
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
              <Aside name="story" data={storyData} />
              <Aside name="recommend" data={recommendData} />
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
