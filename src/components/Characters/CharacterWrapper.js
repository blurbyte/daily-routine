import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';
import media from '../../styles/media';

const CharacterWrapper = styled.div`
  padding: 0;
  padding-bottom: ${spacingLarge};
  position: relative;

  ${media.phone`
    padding-bottom: 0;
  `};
`;

export default CharacterWrapper;
