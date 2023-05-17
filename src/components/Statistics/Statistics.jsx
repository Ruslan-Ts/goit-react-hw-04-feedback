import PropTypes from 'prop-types';
import {Container } from './Statistics.styled';
import Notification from 'components/Notification/Notification';

const FeedbackStat = ({ good, neutral, bad, total, positiveFeedback }) => {
    return total === 0 ? (<Notification message="There is no feedback"
    />) : (
        <Container>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}%</p>
        </Container>
    )
}

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default FeedbackStat;