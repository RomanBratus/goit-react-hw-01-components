import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './Friends/FriendList';


import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friendsData={friends} />
    </div>
  );
};
