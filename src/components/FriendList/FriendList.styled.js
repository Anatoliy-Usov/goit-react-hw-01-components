import styled from 'styled-components';

export const List = styled.li`
  list-style-type: none;
  padding: 10px;
  display: flex;
  align-items: center;

  text-align: center;
  margin-bottom: 10px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  gap: 30px;
`;

export const AllFriendList = styled.ul`
  padding: 0;
  margin: 150px;
`;

export const ImagingAvatar = styled.img`
  border: 2px solid grey;
  border-radius: 4px;
`;

export const FriendName = styled.p`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  margin-left: 15px;

  border-radius: 50%;

  background: ${props => {
    switch (props.children) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'aqua';
    }
  }};
`;
