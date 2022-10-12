import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

function Feeds() {
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

function Comment({ id, content, deletefunc }) {
  return (
    <li key={id} className="comment_new_box">
      <div>
        <span className="userID">userId</span>
        <div>{content}</div>
      </div>
      <button
        className="delete"
        onClick={() => deletefunc(id)} //콜백함수에서 comment.id를 받아서 filter할 것
      >
        x
      </button>
    </li>
  );
}

function MainSue() {
  return (
    <div className="body">
      <Nav />
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
              {ASIDE_LIST.map(el => {
                return (
                  <span className="constdata" key={el.id}>
                    {el.menuName} ·
                  </span>
                );
              })}
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainSue;

const ASIDE_LIST = [
  { id: 1, menuName: '소개' },
  { id: 2, menuName: '도움말' },
  { id: 3, menuName: '홍보 센터' },
  { id: 4, menuName: 'API' },
  { id: 5, menuName: '채용 정보' },
  { id: 6, menuName: '개인정보처리방침' },
  { id: 7, menuName: '약관' },
  { id: 8, menuName: '위치' },
  { id: 9, menuName: '인기 계정' },
  { id: 10, menuName: '해시태그' },
  { id: 11, menuName: '언어' },
];
