import React from 'react';


function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stats-link">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-link">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-link">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
