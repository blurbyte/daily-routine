import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';

import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import ErrorBoundary from '../ErrorBoundary';
import GenderSettings from '../GenderSettings';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import CloseButton from './CloseButton';
import Form from './Form';
import Header from './Header';

function SettingsPanel({ isVisible, onClose }) {
  useLockBodyScroll(isVisible);

  return (
    <SidePanel isVisible={isVisible} onOverlayClick={onClose}>
      <FocusLock autoFocus={false}>
        <Header>
          <Subheadline>
            My role <strong>settings</strong>
          </Subheadline>
          <CloseButton onClick={onClose} />
        </Header>
        <Form>
          <ErrorBoundary>
            <GenderSettings />
          </ErrorBoundary>
        </Form>
      </FocusLock>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
