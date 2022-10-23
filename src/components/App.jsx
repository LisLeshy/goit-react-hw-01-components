import { Profile } from "./Profile/Profile.jsx"
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";
import user from '../data/user.json/user'
import data from '../data/data.json/data'
import friends from '../data/friends.json/friends'
import transactions from '../data/transactions.json/transactions'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        // flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends = {friends} />
      <TransactionHistory items={transactions} />
    </div>   
  );
};