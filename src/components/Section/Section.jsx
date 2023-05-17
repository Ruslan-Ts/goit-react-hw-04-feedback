import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => (
    <div>
        {title && <Title>{title}</Title>}
        {children}
    </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;