import styled from 'styled-components';

import { colorWhite, spacingLarge } from '../../styles/designTokens';
import media from '../../styles/media';
import Section from '../Section';

const Wrapper = styled(Section)`
  background: ${colorWhite};
  padding-top: ${spacingLarge};

  ${media.phone`
    background: inherit;
  `};
`;

export default Wrapper;
