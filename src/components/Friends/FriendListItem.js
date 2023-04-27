import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name }) {
  console.log(name);
  return (
    <span>
      <img
        className={css.friends_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friends_name}>{name}</p>
    </span>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;
