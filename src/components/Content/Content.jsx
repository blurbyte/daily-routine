// Generic responsive content wrapper

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Styled = styled.div`
  max-width: ${props => (props.$narrow ? 48 : 96)}rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
  position: relative;
`;

function Content({ narrow, ...props }) {
  return <Styled $narrow={narrow} {...props} />;
}

Content.propTypes = {
  narrow: PropTypes.bool
};

export default Content;
