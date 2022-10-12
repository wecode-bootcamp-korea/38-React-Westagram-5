import React from 'react';

const Mainright = () => {
  return (
    <div className="main-right">
      <div className="userInfoWrap">
        <img
          src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/profile-insta.jpeg')}
          className="profile"
        />
        <div className="nicknameAndName">
          <h3>hyun._.gus</h3>
          <p>위코드 38기 최현</p>
        </div>
      </div>
      <div className="storyWrap">
        <div className="storyNav">
          <span>스토리</span>
          <p>모두 보기</p>
        </div>
        <div className="userWrap">
          <div className="userN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user1.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>hyun._.gus</h4>
              <p>5분 전</p>
            </div>
          </div>
          <div className="userN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user2.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>yougettheswag</h4>
              <p>16분 전</p>
            </div>
          </div>
          <div className="userN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>Front_end_devloper</h4>
              <p>2시간 전</p>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestWrap">
        <div className="suggestNav">
          <span>회원님을 위한 추천</span>
          <p>모두 보기</p>
        </div>
        <div className="suggestUserWrap">
          <div className="suggestUserN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>we123</h4>
              <p>abcdefg님 외..</p>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="suggestUserN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>co123</h4>
              <p>yougettheswag 님 외..</p>
            </div>
            <span className="follow">팔로우</span>
          </div>
          <div className="suggestUserN">
            <img
              src={require('/Users/hyun/Desktop/38-React-Westagram-5/src/assets/images/choihyun/user3.jpeg')}
              className="rightProfile"
              alt="user1"
            />
            <div className="userIdTime">
              <h4>de123</h4>
              <p>sukgodang 님 외..</p>
            </div>
            <span className="follow">팔로우</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainright;
