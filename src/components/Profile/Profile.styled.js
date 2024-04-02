import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 50px auto;
  background-color: #808080;

  border: 2px solid grey;
  border-radius: 5px;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  width: 100%;

  background-color: white;
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid grey;
`;

export const UserContact = styled.p`
  margin-top: 10px;
  color: gray;
  font-size: 16px;
  font-weight: bold;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c1d4ea;
  text-align: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  padding: 15px 0;
`;

export const StatInfo = styled.span`
  display: block;
  margin-bottom: 5px;
  color: grey;
`;

export const StatQuantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;
