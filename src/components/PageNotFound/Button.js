import styled from 'styled-components';

import { colorDarkGreen, colorGreen } from '../../styles/designTokens';
import RedirectButton from '../RedirectButton';

const Button = styled(RedirectButton)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

export default Button;
