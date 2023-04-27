import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';


const Profile = props => {
const { avatar, username, tag, location, stats } = props;

  return (
    <div className={css.profile_main}>
      <div className={css.profile_description}>
        <img src={avatar} alt="User avatar" className={css.profile_avatar} />
        <p className={css.profile_username}>{username}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_stats}>
        <li>
          <span className={css.profile_label}>Followers </span>
          <span className={css.profile_quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.profile_label}>Views </span>
          <span className={css.profile_quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.profile_label}>Likes </span>
          <span className={css.profile_quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
   stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Profile;
