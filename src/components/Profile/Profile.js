// import { Card } from './Profile.styled';
// import { Statistic } from './Profile.styled';
import { UserCard } from './Profile.styled';

export const Profile = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <UserCard className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p clasName="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </UserCard>
  );
};
