export default function Story({ id, timestamp }) {
  return (
    <div className="story_profile_img">
      <div>
        <div></div>
      </div>
      <div>
        <div className="story-id">{id}</div>
        <div className="story-timeStamp">{timestamp}분 전</div>
      </div>
    </div>
  );
}
