import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  margin: 50px auto;

  border: 2px solid grey;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  margin: 20px;
  color: grey;
`;

export const Box = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const List = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  background-color: ${randomColor};
`;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StaticFile = styled.span`
  display: block;
  color: white;
`;

export const PercentFile = styled.span`
  display: block;
  font-size: 24px;
  color: white;
  margin-top: 10px;
`;
