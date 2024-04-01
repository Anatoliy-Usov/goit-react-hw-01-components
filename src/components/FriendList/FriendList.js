import {
  List,
  AllFriendList,
  ImagingAvatar,
  FriendName,
  IsOnline,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <AllFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </AllFriendList>
  );
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <List>
      <IsOnline>{isOnline}</IsOnline>
      <ImagingAvatar src={avatar} alt="User avatar" width="60" />
      <FriendName>{name}</FriendName>
    </List>
  );
};
