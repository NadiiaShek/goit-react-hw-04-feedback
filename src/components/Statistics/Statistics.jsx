import propTypes from 'prop-types';
import { Box, Item } from './statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <Item>Good:<span>{good}</span></Item>
      <Item>Neutral:<span> {neutral}</span></Item>
      <Item>Bad:<span>{bad}</span></Item>
      <Item>Total:<span>{total}</span></Item>
      <Item>Positive feedback:<span>{positivePercentage}%</span></Item>
    </Box>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};