import React, { useState } from 'react';
import './Main.scss';
import Nav from '/Users/hyun/Desktop/38-React-Westagram-5/src/components/Nav/Nav.js';
import Mainright from './Mainright.js';
import Mainfeed from './Mainfeed.js';

const MainHyun = () => {
  let [commentInput, setCommentIput] = useState('');
  let [commentInputArr, setCommentIputArr] = useState([]);

  return (
    <>
      <Nav />
      <div className="main">
        <div className="feeds">
          <Mainfeed />
        </div>
        <Mainright />
      </div>
    </>
  );
};
export default MainHyun;
