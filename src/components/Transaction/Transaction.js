// import { List } from 'components/Statistics/Statistics.styled';
import {
  Table,
  NameBlock,
  TypeList,
  TypeListKind,
  TypeTransac,
  TypeTransacKind,
  TableBg,
} from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  //   console.log(props.transactions);
  return (
    <Table>
      <NameBlock>
        <tr>
          <TypeListKind>TYPE</TypeListKind>
          <TypeList>AMOUNT</TypeList>
          <TypeList>CURRENCY</TypeList>
        </tr>
      </NameBlock>

      <tbody>
        {transactions.map(transaction => {
          return (
            <TableBg key={transaction.id}>
              <TypeTransacKind>{transaction.type}</TypeTransacKind>
              <TypeTransac>{transaction.amount}</TypeTransac>
              <TypeTransac>{transaction.currency}</TypeTransac>
            </TableBg>
          );
        })}
      </tbody>
    </Table>
  );
};
