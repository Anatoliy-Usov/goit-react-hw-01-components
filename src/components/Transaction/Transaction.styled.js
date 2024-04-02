import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background: #dfe5e8;
  text-align: center;
  width: 600px;
  border-radius: 5px;
`;

export const NameBlock = styled.thead`
  background: #03a9f4;
  height: 40px;
  border-radius: 5px;
`;

export const TypeListKind = styled.th`
  width: 200px;
  color: white;
  font-size: 10px;
  text-align: left;
  padding-left: 70px;
`;

export const TypeList = styled.th`
  width: 200px;
  color: white;
  font-size: 10px;
  text-justify: inter-character;
`;

export const TypeTransacKind = styled.td`
  height: 40px;
  text-align: left;
  padding-left: 70px;
  text-transform: capitalize;
`;

export const TypeTransac = styled.td`
  height: 40px;
`;

export const TableBg = styled.tr`
  &:nth-of-type(2n) {
    background-color: #f0f2f5;
  }
`;
