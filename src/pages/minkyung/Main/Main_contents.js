import React, { useEffect, useState } from 'react';
import { AsideData } from './Main_AsideData';
import Reply from './Main_content_reply';

function Content() {
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

  return (
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
              <i className="fa-solid fa-ellipsis" />
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
                <i className="fa-regular fa-heart" />
              </div>
              <div className="ic-2">
                <i className="fa-regular fa-comment" />
              </div>
              <div className="ic-3">
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
            </div>
            <div className="inicon-2">
              <div className="ic-4">
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>
          </div>
          <Reply />
        </div>
      ))}
    </div>
  );
}

export default Content;
