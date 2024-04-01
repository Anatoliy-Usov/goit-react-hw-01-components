import {
  Container,
  UserCard,
  UserImg,
  UserContact,
  StatList,
  ListItem,
  StatInfo,
  StatQuantity,
} from './Profile.styled';

export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <Container>
      <UserCard>
        <UserImg src={avatar} alt="User avatar" />
        <h3>{username}</h3>
        <UserContact>{tag}</UserContact>
        <UserContact>{location}</UserContact>
      </UserCard>

      <StatList>
        <ListItem>
          <StatInfo>followers</StatInfo>
          <StatQuantity>{stats.followers}</StatQuantity>
        </ListItem>
        <ListItem>
          <StatInfo>views</StatInfo>
          <StatQuantity>{stats.views}</StatQuantity>
        </ListItem>
        <ListItem>
          <StatInfo>likes</StatInfo>
          <StatQuantity>{stats.likes}</StatQuantity>
        </ListItem>
      </StatList>
    </Container>
  );
};
