import PropTypes from 'prop-types';
import styled from 'styled-components';

import { QuoteProvider } from '../../context/QuoteContext';
import { spacingMedium } from '../../styles/designTokens';

const Wrapper = styled.div`
  max-width: 48rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  align-items: end;
`;

function RoleContent({ children }) {
  return (
    <QuoteProvider>
      <Wrapper>{children}</Wrapper>
    </QuoteProvider>
  );
}

RoleContent.propTypes = {
  children: PropTypes.node
};

export default RoleContent;
