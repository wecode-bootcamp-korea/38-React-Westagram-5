import React, { useState } from 'react';
import Comment from '../../yoonsue/Main/Comment';
import './Main.scss';

function Feeds({ img, likes, text, userID }) {
  const [comment, setComment] = useState(''); //input창에 입력하는 즉시 업데이트
  const [comments, setComments] = useState([]); //qo

  const onChange = event => {
    const newComment = event.target.value;
    setComment(newComment);
  };

  const isDisabled = () => {
    return comment.trim().length > 0 ? false : true;
  };

  const submitComment = event => {
    if (!event.nativeEvent.isComposing && comment.length > 0) {
      event.preventDefault();
      setComments(comments => [
        ...comments,
        { id: new Date().getTime(), comment: comment }, //여기에서 id값을 부여
      ]);
      setComment('');
    } else if (!comment.length) event.preventDefault();
  };

  const deleteComment = id => {
    const newComments = comments.filter(comment => {
      return comment.id !== id;
    });
    setComments([...newComments]);
  };

  return (
    <div className="feeds">
      <article>
        <div className="header">
          <div>
            <div></div>
            <span>{userID}</span>
          </div>
          <div className="hamburger"></div>
        </div>
        <div className="main_img_icon">
          <div className="main_img">
            <div>
              {/* contentImg */}
              <img src={img} alt="Cat" className="src" />
            </div>
          </div>
          <div className="icon_under_img">
            <div className="main_icon">
              <span className="material-symbols-rounded icon">favorite</span>
              <span className="material-symbols-rounded icon">
                mode_comment
              </span>
              <span className="material-symbols-rounded icon">ios_share</span>
            </div>
            <span className="material-symbols-rounded icon">bookmark</span>
          </div>
        </div>
        <div className="count-likes">
          <div className="liked_num_people"></div>
          <span>
            {/* countLikes */}
            <b>kimsoopy</b>님 <b>외 {likes}명</b>이 좋아합니다.
          </span>
        </div>
        <div className="comment_box">
          <div className="user_comment">
            {/* userId, contentText */}
            <span className="userId">hotchocomite</span>
            <span>{text}</span>
            <span>더 보기</span>
          </div>
          <ul className="comment_new">
            {comments.map(comment => (
              <Comment
                key={comment.id}
                id={comment.id}
                content={comment.comment}
                deletefunc={() => deleteComment(comment.id)}
              />
            ))}
          </ul>
        </div>
        <div className="timestamp">42분 전</div>
      </article>
      <div className="comment_parent">
        <form onSubmit={submitComment}>
          <input
            onChange={onChange}
            value={comment}
            id="comment"
            type="text"
            placeholder="댓글 달기..."
          />
          <button disabled={isDisabled()} className="comment_btn">
            게시
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feeds;
