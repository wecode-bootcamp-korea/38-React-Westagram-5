import React from 'react';

const Comment = props => {
  const { removeComment, item } = props;
  return (
    <div className="comment-id-delete">
      <div>
        <span>yYy_Ds</span>
        <span>{item}</span>
      </div>
      <div className="comment-delete">
        <span className="comment-list-delete" onClick={removeComment}>
          삭제
        </span>
        <span className="comment-list-heart">❣️</span>
      </div>
    </div>
  );
};
export default Comment;
