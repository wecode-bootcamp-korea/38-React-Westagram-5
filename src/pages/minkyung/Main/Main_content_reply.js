import React, { useState } from 'react';

function Reply() {
  const [reply, setReply] = useState('');
  const [replyArray, setReplyArray] = useState([]);
  const replyreplace = reply.replace(/ /g, '');
  const isreplyempty = replyreplace <= 0 ? true : false;
  const resultColor = isreplyempty ? '#9C9C9C' : 'blue';
  const saveReply = e => {
    setReply(e.target.value);
  };

  const replySet = event => {
    event.preventDefault();
    if (reply === '') {
      return;
    } else {
      setReplyArray(replyList => [...replyList, reply]);
      setReply('');
    }
  };

  return (
    <div className="extra">
      <div className="likes">aineworld님 외 10명이 좋아합니다</div>

      <div className="text">
        <div className="mid">
          <div className="mid_1"> wecode&nbsp;</div>{' '}
          <div className="mid_2"> dream room</div>
          <div className="mlikes" />
        </div>
        <div className="w_reply">
          {replyArray.map(sth => (
            <form onSubmit={replySet} key={sth}>
              <div className="w_replyArray">
                <div className="w_reply_id"> ys_dd002 </div>
                <div className="w_reply_txt">{sth} </div>
                <div className="w_icon">
                  {' '}
                  <i className="fa-regular fa-heart" />
                  &nbsp;{' '}
                </div>
                <div className="w_delete"> &nbsp;삭제&nbsp; </div>
              </div>
            </form>
          ))}
        </div>
      </div>
      <form className="reply">
        <input
          id="reply"
          type="text"
          placeholder="댓글달기.."
          onChange={saveReply}
          value={reply}
        />
        <button
          className="replybutton"
          style={{ color: resultColor }}
          onClick={replySet}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Reply;
