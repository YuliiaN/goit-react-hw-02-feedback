import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(name => {
        return (
          <FeedbackOptionsButton
            type="button"
            key={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </FeedbackOptionsButton>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
