import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import profileUser from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './Transaction/Transaction';
import transactions from './Transaction/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile item={profileUser} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
