import React from 'react';

const Comment = props => {
  const { comment, setComment, button, setButton, item, index } = props;
  return (
    <div className="comment-id-delete" key={index}>
      <div>
        <span>yYy_Ds</span>
        <span>{item}</span>
      </div>
      <div className="comment-delete">
        <span
          className="comment-list-delete"
          onClick={() => {
            let copy = [...button];
            copy.splice(index, 1);
            setButton(copy);
          }}
        >
          삭제
        </span>
        <span className="comment-list-heart">❣️</span>
      </div>
    </div>
  );
};
export default Comment;
