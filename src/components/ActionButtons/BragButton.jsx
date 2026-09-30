import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { BRAG } from '../../constants/roleActions';
import { colorDarkGreen, colorGreen } from '../../styles/designTokens';
import { role } from '../../types';
import ButtonBase from './ButtonBase';
import LightbulbIcon from './LightbulbIcon';

const StyledButton = styled(ButtonBase)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

const BUTTON_LABEL = 'Brag about my efforts';
const UPDATED_BUTTON_LABEL = 'Brag more';

function BragButton({ quoteID, role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton {...props} to={`/${role}/${BRAG}/${quoteID}`} icon={LightbulbIcon} onClick={updateButtonLabel}>
      {text}
    </StyledButton>
  );
}

BragButton.propTypes = {
  role: role.isRequired,
  quoteID: PropTypes.string.isRequired
};

export default BragButton;
