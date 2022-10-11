import React, { useState } from 'react';
import './Main.scss';

function Feeds() {
  const [comment, setComment] = useState(''); //input창에 입력하는 즉시 업데이트
  const [comments, setComments] = useState([]);
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
      setComments(comments => [...comments, comment]);
      setComment('');
    } else if (!comment.length) event.preventDefault();
  };

  return (
    <div className="feeds">
      <article>
        <div className="header">
          <div>
            <div></div>
            <span>hotchocomite</span>
          </div>
          <div className="hamburger"></div>
        </div>
        <div className="main_img_icon">
          <div className="main_img">
            <div>
              <img
                src={require('../../../assets/images/yoonsue/img_cat.png')}
                alt=""
                className="src"
              />
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
            <b>kimsoopy</b>님 <b>외 10명</b>이 좋아합니다.
          </span>
        </div>
        <div className="comment_box">
          <div className="user_comment">
            <span className="userId">hotchocomite</span>
            <span>멋진 신세계...</span>
            <span>더 보기</span>
          </div>
          {/* commentList */}
          <CommentList
            className="comment_new"
            comments={comments}
            setCommentArr={setComments}
          />
        </div>
        <div className="timestamp">42분 전</div>
      </article>

      {/* input */}
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
        {/* button */}
      </div>
    </div>
  );
}

function CommentList(props) {
  const commentArr = props.comments;
  return (
    <ul className={props.className}>
      {commentArr.map((comment, index) => {
        return (
          <Comment comment={comment} comments={props.comments} key={index} />
        );
      })}
    </ul>
  );
}

function Comment(props) {
  console.log(props);
  // const deleteComment = index => {
  //   props.comments.filter((_, i) => {
  //     return i !== index;
  //   });
  // };
  const deleteComment = event => {
    props.comments.filter(item => {
      return item !== event.target.value.parent;
    });
  };
  return (
    <li>
      <span className="userId">hello</span>
      <span className="comment_new_box">{props.comment}</span>
      <button onClick={deleteComment} className="delete">
        X
      </button>
    </li>
  );
}

function MainSue() {
  return (
    <div className="body">
      <main>
        <div className="main">
          <Feeds />
          <div className="main_right">
            <aside>
              <div className="self_profile">
                <img
                  src={require('../../../assets/images/yoonsue/profile.JPG')}
                  alt="Profile"
                ></img>
                <div>
                  <div>hotchocomite</div>
                  <div>안녕하세용</div>
                </div>
              </div>
              <div className="story">
                <div className="header">
                  <span>스토리</span>
                  <span>모두 보기</span>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
              </div>
              <div className="recommend">
                <div className="header">
                  <span>스토리</span>
                  <span>모두 보기</span>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
                <div className="story_profile_img">
                  <div>
                    <div></div>
                  </div>
                  <div>
                    <div className="story-id">softcuddles</div>
                    <div className="story-timeStamp">2분 전</div>
                  </div>
                </div>
              </div>
            </aside>
            <footer>
              <p>Intagram 정보 지원</p>
              <p>2019 INSTAGRAM</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSue;
