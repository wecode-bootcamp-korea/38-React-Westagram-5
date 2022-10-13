import React, { useState } from 'react';
import Maincommentform from './Maincomment.js';

const Mainfeed = () => {
  let [commentInput, setCommentIput] = useState('');
  let [commentInputArr, setCommentIputArr] = useState([]);
  return (
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
          <i className="fa-solid fa-heart fa-2x" style={{ color: 'red' }} />
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
  );
};

export default Mainfeed;
