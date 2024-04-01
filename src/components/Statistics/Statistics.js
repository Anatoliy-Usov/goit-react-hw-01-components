import {
  Container,
  Title,
  List,
  Box,
  StaticFile,
  PercentFile,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const StatElems = ({ data }) => {
    return data.map(({ label, percentage, id }) => {
      return (
        <List key={id}>
          <StaticFile>{label}</StaticFile>
          <PercentFile>{percentage + '%'}</PercentFile>
        </List>
      );
    });
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Box>
        <StatElems data={stats} />
      </Box>
    </Container>
  );
};
