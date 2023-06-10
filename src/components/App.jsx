import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';
import { FriendList } from './Friends/Friends.jsx';
import friends from 'components/Friends/friends.json';
// const friends = [
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
//     name: 'Mango',
//     isOnline: true,
//     id: 1812,
//   },
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
//     name: 'Kiwi',
//     isOnline: false,
//     id: 1137,
//   },
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/1623/1623681.png',
//     name: 'Ajax',
//     isOnline: true,
//     id: 1213,
//   },
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/2977/2977285.png',
//     name: 'Jay',
//     isOnline: true,
//     id: 1714,
//   },
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998749.png',
//     name: 'Poly',
//     isOnline: false,
//     id: 1284,
//   },
// ];
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: 20,
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

      <FriendList friends={friends}>{}</FriendList>
    </div>
  );
};
