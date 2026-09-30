import styled from 'styled-components';

import { fontLarge, fontWeightNormal, spacingSmall } from '../../styles/designTokens';
import media from '../../styles/media';

const Subheadline = styled.h2`
  font-size: ${fontLarge};
  margin: ${spacingSmall} 0;
  font-weight: ${fontWeightNormal};
  text-align: center;

  ${media.phone`
    text-align: left;
  `};
`;

export default Subheadline;
