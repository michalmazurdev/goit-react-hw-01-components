import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';
import { FriendList } from './Friends/Friends.jsx';
import friends from 'components/Friends/friends.json';
import transactions from 'components/Transactions/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
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
      <TransactionHistory items={transactions} />
    </div>
  );
};
