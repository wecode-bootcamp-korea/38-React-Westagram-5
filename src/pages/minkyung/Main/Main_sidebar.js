import React, { useEffect, useState } from 'react';
import { AsideData } from './Main_AsideData';

function SideBar() {
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);
  return (
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
  );
}

export default SideBar;
