import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          type="button"
          onClick={leaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  leaveFeedback: propTypes.func.isRequired,
};