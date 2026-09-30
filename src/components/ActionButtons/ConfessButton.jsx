import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { CONFESS } from '../../constants/roleActions';
import { colorDarkRed, colorRed } from '../../styles/designTokens';
import { role } from '../../types';
import ButtonBase from './ButtonBase';
import SaltGrinderIcon from './SaltGrinderIcon';

const StyledButton = styled(ButtonBase)`
  background-color: ${colorRed};
  border-bottom-color: ${colorDarkRed};
`;

const BUTTON_LABEL = 'Confess my mistake';
const UPDATED_BUTTON_LABEL = 'Confess again';

function ConfessButton({ quoteID, role, ...props }) {
  const [text, setText] = useState(BUTTON_LABEL);

  const updateButtonLabel = () => setText(UPDATED_BUTTON_LABEL);

  return (
    <StyledButton {...props} to={`/${role}/${CONFESS}/${quoteID}`} icon={SaltGrinderIcon} onClick={updateButtonLabel}>
      {text}
    </StyledButton>
  );
}

ConfessButton.propTypes = {
  role: role.isRequired,
  quoteID: PropTypes.string.isRequired
};

export default ConfessButton;
