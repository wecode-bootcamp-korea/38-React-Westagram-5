import React, { useState, useRef } from 'react';

const Maincommentform = props => {
  const { commentInput, setCommentIput, commentInputArr, setCommentIputArr } =
    props;
  const [commentLikeButton, setCommentLikeButton] = useState('♡');
  const [commentLikeClass, setCommentLikeClass] = useState('like');
  const uniqueKey = useRef(1);
  const onSubmit = event => {
    event.preventDefault();
    let copyCommentInputArr = [...commentInputArr];
    copyCommentInputArr.push({ value: commentInput, key: uniqueKey.current });
    setCommentIputArr(copyCommentInputArr);
    setCommentIput('');
    console.log('a');
    uniqueKey.current += 1;
  };
  // const commentLikeToLiked = event => {
  //   setCommentLikeButton('♥');
  //   setCommentLikeClass('liked');
  // };
  // const commentLikedToLike = event => {
  //   setCommentLikeButton('♡');
  //   setCommentLikeClass('like');
  // };
  const commentLike = event => {
    event.target.className === 'like'
      ? // ? commentLikeToLiked()
        // : commentLikedToLike();
        (event.target.className = 'liked')((event.target.innerHTML = '♥'))
      : (event.target.className = 'like')((event.target.innerHTML = '♡'));
  };

  const commentDelete = id => {
    const newInputArr = commentInputArr.filter(item => item.key !== id);
    setCommentIputArr(newInputArr);
  };

  return (
    <>
      <div className="feedDesc">
        <div>
          <p className="ptagID">hyun._.gus</p>
          <p>대천에서 찍은 북두칠성 . . . .</p>
          <p id="moreDesc">&nbsp; &nbsp;더 보기</p>
        </div>
        <div>
          <p className="ptagID">wecode.bootcamp</p>
          <p>어머~ 너무 이뻐용 ㅎㅎㅎ</p>
          <span className="like" onClick={commentLike}>
            ♡
          </span>
          <span className="delete">X</span>
        </div>
        {commentInputArr.map(item => (
          <div key={item.key}>
            <p className="ptagID">hyun._.gus</p>
            <p>{item.value}</p>
            <span className="like" onClick={commentLike}>
              ♡
            </span>
            <span className="delete" onClick={() => commentDelete(item.key)}>
              X
            </span>
          </div>
        ))}
      </div>
      <div className="comment">
        <div className="emoji">
          <img
            src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/emoji.png')}
            alt="comment emoji"
          />
        </div>
        <form onSubmit={onSubmit}>
          <input
            className="commentInput"
            placeholder="댓글을 입력하세요..."
            onChange={event => setCommentIput(event.target.value)}
            value={commentInput}
          />
          <button className="commentButton">게 시</button>
        </form>
      </div>
    </>
  );
};

export default Maincommentform;
