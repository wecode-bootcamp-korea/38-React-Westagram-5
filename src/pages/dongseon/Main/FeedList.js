import React, { useEffect, useState } from 'react';
import FeedListItem from './FeedListItem';

const FeedList = props => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setUserList(result));
  }, []);
  return (
    <>
      {userList.map(item => {
        return <FeedListItem key={item.id} feed={item} />;
      })}
    </>
  );
};

export default FeedList;
