import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friendsData }) {
  const getStatus = value => {
    if (value) {
      return css['friends_on'];
    } else {
      return css['friends_off'];
    }
  };
  return (
    <section className={css.friends_main}>
      <ul className={css.friends__list}>
        {friendsData.map(friendsDataitem => {
          console.log(friendsDataitem.isOnline);
          return (
            <li key={friendsDataitem.id} className={css.friends_card}>
              <span

                className={getStatus(friendsDataitem.isOnline)}

              ></span>
              <FriendListItem
                avatar={friendsDataitem.avatar}
                name={friendsDataitem.name}
                isOnline={friendsDataitem.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};


export default FriendList;
