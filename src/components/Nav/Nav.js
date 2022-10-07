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
          <span className="icon compass material-symbols-outlined">
            explore
          </span>
          <span className="icon liked material-symbols-outlined">favorite</span>
          <span className="icon profile material-symbols-outlined">
            account_circle
            <div className="icon profile">
              <section className="toggle-profile">
                <div className="toggle-items">
                  <div className="icon toggle1"></div>
                  <span>프로필</span>
                </div>
                <div className="toggle-items">
                  <div className="icon toggle2"></div>
                  <span>저장됨</span>
                </div>
                <div className="toggle-items">
                  <div className="icon toggle3"></div>
                  <span>설정</span>
                </div>
                <div className="toggle-items">logout</div>
              </section>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

// function Nav() {
//   return (
//     <div className="nav">
//       <div className="container1">
//         <div className="container">
//
//         </div>
//       </div>
//     </div>
//   );
// }
export default Nav;
