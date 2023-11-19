import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import profileUser from './Profile/user.json';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile item={profileUser} />
    </div>
  );
};
