
import PropTypes from 'prop-types';
import {Container, Button} from './FeedbackOptions.styled'

const FeedbackOptns = ({options, onFeedback}) => {
    return (
        <Container>
            {options.map(option => (
                <Button
                    type='button'
                    key={option}
                    onClick={() => onFeedback(`${ option }`)}>
                    {option}
                </Button>
            ))}
    </Container>
)
}

export default FeedbackOptns;

FeedbackOptns.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};