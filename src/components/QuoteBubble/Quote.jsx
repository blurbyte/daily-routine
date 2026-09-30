import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.p`
  margin: 0;
  padding: 1.6rem 2.4rem;
  padding-bottom: ${props => (props.$error ? 2.4 : 0)}rem;
`;

function Quote({ error, ...props }) {
  return <Styled $error={error} {...props} />;
}

Quote.propTypes = {
  error: PropTypes.bool
};

export default Quote;
