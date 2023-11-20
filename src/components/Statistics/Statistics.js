import { Notification } from './Notification/Notification';
import { FeedbackStatus } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <div>
          <FeedbackStatus $variant="good">Good: {good}</FeedbackStatus>
          <FeedbackStatus $variant="neutral">Neutral: {neutral}</FeedbackStatus>
          <FeedbackStatus $variant="bad">Bad: {bad}</FeedbackStatus>
          <FeedbackStatus $variant="total">Total: {total}</FeedbackStatus>
          <FeedbackStatus>
            Positive feedback: {positivePercentage}%
          </FeedbackStatus>
        </div>
      )}
    </div>
  );
};
