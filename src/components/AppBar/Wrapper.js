import styled from 'styled-components';

import { colorWhite, spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const Wrapper = styled.header`
  width: 100%;
  background: ${colorWhite};
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacingMedium};

  ${media.phone`
    justify-content: flex-start;
  `};
`;

export default Wrapper;
