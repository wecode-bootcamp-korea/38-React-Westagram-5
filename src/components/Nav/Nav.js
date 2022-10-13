import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="navigation">
      <div className="nav_container">
        <div className="logobox">
          <img
            className="logos"
            src={require('../../assets/images/components/instagram-logo.png')}
            alt="instagramlogo"
          />
          <h1 className="logo">Westagram</h1>
        </div>
        <div className="text">
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons">
          <div className="icon compass material-symbols-outlined"></div>
          <div className="icon liked material-symbols-outlined"></div>
          <div className="icon profile material-symbols-outlined"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
