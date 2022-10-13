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
export default Comment;
