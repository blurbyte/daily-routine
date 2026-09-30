import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';
import media from '../../styles/media';

const Wrapper = styled.footer`
  background: ${colorWhite};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
