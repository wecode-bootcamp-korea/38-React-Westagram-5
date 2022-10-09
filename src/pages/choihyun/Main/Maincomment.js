import React from 'react';

const Maincommentform = props => {
  const { commentInput, setCommentIput, commentInputArr, setCommentIputArr } =
    props;
  const onSubmit = event => {
    console.log(commentInput);
    event.preventDefault();
    let copyCommentInputArr = [...commentInputArr];
    copyCommentInputArr.push(commentInput);
    console.log(copyCommentInputArr);
    setCommentIputArr(copyCommentInputArr);
    setCommentIput('');
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
          <span className="like">♡</span>
          <span className="delete">X</span>
        </div>
        {commentInputArr.map(commentInput => (
          <div>
            <p className="ptagID">hyun._.gus</p>
            <p>{commentInput}</p>
            <span className="like">♡</span>
            <span className="delete">X</span>
          </div>
        ))}
      </div>
      <div className="comment">
        <div className="emoji">
          <img
            src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/emoji.png')}
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
