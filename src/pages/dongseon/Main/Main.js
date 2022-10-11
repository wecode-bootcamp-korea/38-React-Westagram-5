import React, { useState } from 'react';
import './Main.scss';
import dog from '../../../assets/images/dongseon/dog.jpeg';
import jum from '../../../assets/images/dongseon/jum.png';
import Comment from './Comment';

const Main = () => {
  let [comment, setComment] = useState('');
  let [button, setButton] = useState([]);

  const inputKeyDown = event => {
    if (window.event.code === 'Enter') {
      btn();
    }
  };

  const inputValue = e => {
    setComment(e.target.value);

    console.log(comment);
    if (comment.length >= 1) {
      console.log('버튼활성화');
    } else {
      console.log('비활성화');
    }
  };

  const btn = () => {
    let copy = [...button];
    copy.unshift(comment);
    setButton(copy);
  };

  return (
    <>
      <div className="main-page">
        <nav>
          <div className="total-nav">
            <div className="left-nav">
              <img
                id="instagram-emoticon"
                alt="instalog"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              />
              <span className="westa-text">westagram</span>
            </div>
            <div className="middle-nav">
              <input className="nav-input" type="text" placeholder="검색" />
              <img
                id="glass-emoticon"
                src="https://cdn-icons-png.flaticon.com/512/5948/5948534.png"
                alt="icons"
              />
            </div>
            <div className="right-nav">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="explore"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="heart"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="profile"
              />
            </div>
          </div>
        </nav>
        <main>
          <div className="left-main">
            <div className="feed-box">
              <article className="box-article">
                <div className="img-text-article">
                  <img className="img1-article" src={dog} alt="dog" />
                  <div className="text-article">canon_mj</div>
                  <img className="jumjumjum" src={jum} alt="jum" />
                </div>
                <img className="img2-article" src={dog} alt="mount" />
                <div className="main-mid-input-box">
                  <div className="main-text-img">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                      alt="icons"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1947/1947247.png"
                      alt="icons"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2089/2089736.png"
                      alt="icons"
                    />
                    <img
                      className="bookmark"
                      src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
                      alt="icons"
                    />
                  </div>
                  <div className="textarea-box-comment">
                    <div className="textarea-div-comment">
                      <img
                        className="img2-right-main"
                        src="https://as1.ftcdn.net/v2/jpg/00/65/76/24/1000_F_65762430_bLbrz7wDChm8kT8OEYUpUFMdiLB2AM4b.jpg"
                        alt="dog"
                      />
                      <span className="text3-right-main">
                        aineworld님 외 10명이 좋아합니다
                      </span>
                    </div>
                    <div className="textarea-p">
                      <p>
                        canon_mj 위워크에서 진행한 멍멍이 클래스...{' '}
                        <span style={{ color: 'gray' }}>더 보기</span>
                      </p>
                      <p>neceosecius 거봐 좋았잖아~~~~🙆🏻‍♀️</p>
                      <div className="comment-list">
                        {button.map((item, index) => (
                          <Comment
                            comment={comment}
                            setComment={setComment}
                            button={button}
                            setButton={setButton}
                            item={item}
                            index={index}
                          />
                        ))}
                      </div>
                      <div className="textarea-time-emotion">
                        <span className="textarea-span">42분 전</span>
                        <img
                          className="textarea-emotion"
                          src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
                          alt="heart"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="comment-input-text">
                    <input
                      className="comment-input"
                      type="text"
                      placeholder="댓글 달기..."
                      onKeyPress={inputKeyDown}
                      onChange={inputValue}
                    />
                    <button className="comment-button" onClick={btn}>
                      게시
                    </button>
                  </div>
                </div>
              </article>
            </div>
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
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
