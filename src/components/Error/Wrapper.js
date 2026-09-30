import styled from 'styled-components';

import {
  borderRadius,
  borderWidthThick,
  colorBlack,
  colorRed,
  colorWhite,
  fontMedium,
  fontWeightBold,
  spacingSmall
} from '../../styles/designTokens';

const Wrapper = styled.div`
  border: ${borderWidthThick} solid ${colorRed};
  color: ${colorBlack};
  background-color: ${colorWhite};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  margin: ${spacingSmall};
  padding: ${spacingSmall};
  display: flex;
  justify-content: center;
  border-radius: ${borderRadius};
  align-self: start;
`;

export default Wrapper;
