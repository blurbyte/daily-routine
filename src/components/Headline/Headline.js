import styled from 'styled-components';

import { fontXLarge, spacingSmall } from '../../styles/designTokens';
import media from '../../styles/media';

const Headline = styled.h1`
  font-size: ${fontXLarge};
  margin: 0;
  margin-bottom: ${spacingSmall};
  text-align: center;

  ${media.phone`
    text-align: left;
  `};
`;

export default Headline;
