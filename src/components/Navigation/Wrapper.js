import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(${props => props.$numberOfElements}, calc(33.33% - 1.4rem));
  grid-gap: ${spacingMedium};
  justify-content: center;

  ${media.phone`
    display: block;
  `};
`;

export default Wrapper;
