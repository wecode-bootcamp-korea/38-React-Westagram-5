import React, { useState } from 'react';
import dog from '../../../assets/images/dongseon/dog.jpeg';
import jum from '../../../assets/images/dongseon/jum.png';
import Comment from './Comment';

const FeedListItem = ({ feed }) => {
  let [comment, setComment] = useState('');
  let [comments, setComments] = useState([]);

  const inputKeyDown = event => {
    if (window.event.code === 'Enter') {
      btn();
    }
  };

  const inputValue = e => {
    setComment(e.target.value);
  };

  const btn = () => {
    let copy = [...comments];
    copy.unshift(comment);
    setComments(copy);
  };

  //   function rev(index) {
  //     return function () {
  //       console.log(index);
  //     };
  //   }

  const removeComment = index => () => {
    let copy = [...comments];
    copy.splice(index, 1);
    setComments(copy);
  };

  return (
    <div className="feed-box">
      <article className="box-article">
        <div className="img-text-article">
          <img className="img1-article" src={dog} alt="dog" />
          <div className="text-article">{feed.username}</div>
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
                {comments.map((item, index) => (
                  <Comment
                    key={index}
                    item={item}
                    removeComment={removeComment(index)}
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
  );
};

export default FeedListItem;
