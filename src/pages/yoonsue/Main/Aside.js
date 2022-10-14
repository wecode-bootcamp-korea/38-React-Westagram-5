import Story from './Story';

export default function Aside({ name, data }) {
  return (
    <div className={name}>
      <div className="header">
        <span>스토리</span>
        <span>모두 보기</span>
      </div>
      {data.map(el => {
        return <Story key={el.id} id={el.userID} timestamp={el.timestamp} />;
      })}
    </div>
  );
}
