// Modal side panel with backdrop

import { Dialog } from '@base-ui/react/dialog';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorBlack, colorWhite, zIndexModal, zIndexModalOverlay } from '../../styles/designTokens';

const Backdrop = styled(Dialog.Backdrop)`
  position: fixed;
  inset: 0;
  background-color: ${colorBlack};
  opacity: 0.6;
  z-index: ${zIndexModalOverlay};
  transition: opacity 250ms ease-out;

  &[data-starting-style],
  &[data-ending-style] {
    opacity: 0;
  }
`;

const Popup = styled(Dialog.Popup)`
  height: 100%;
  width: 30rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorWhite};
  z-index: ${zIndexModal};
  outline: 0;
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);

  &[data-starting-style],
  &[data-ending-style] {
    transform: translateX(100%);
  }

  &[data-ending-style] {
    transition: transform 250ms ease-in;
  }
`;

function SidePanel({ isVisible = false, children, onClose = () => {} }) {
  function handleOpenChange(isOpen) {
    if (!isOpen) {
      onClose();
    }
  }

  return (
    <Dialog.Root open={isVisible} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Backdrop />
        <Popup data-testid="side-panel">{children}</Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

SidePanel.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func
};

export default SidePanel;
