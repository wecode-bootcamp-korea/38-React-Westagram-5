function Comment({ id, content, deletefunc }) {
  return (
    <li key={id} className="comment_new_box">
      <div>
        <span className="userID">userId</span>
        <div>{content}</div>
      </div>
      <button className="delete" onClick={() => deletefunc(id)}>
        x
      </button>
    </li>
  );
}
export default Comment;
