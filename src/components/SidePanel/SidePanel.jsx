// Simple, modal-like side panel with overlay

import PropTypes from 'prop-types';

import Overlay from './Overlay';
import Panel from './Panel';

function SidePanel({ isVisible, children, onOverlayClick }) {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onOverlayClick} />
      <Panel isVisible={isVisible}>{children}</Panel>
    </>
  );
}

SidePanel.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  onOverlayClick: PropTypes.func
};

export default SidePanel;
