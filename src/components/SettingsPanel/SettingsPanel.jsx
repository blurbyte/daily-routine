import { Dialog } from '@base-ui/react/dialog';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary';
import GenderSettings from '../GenderSettings';
import SidePanel from '../SidePanel';
import Subheadline from '../Subheadline';
import CloseButton from './CloseButton';
import Form from './Form';
import Header from './Header';

function SettingsPanel({ isVisible, onClose }) {
  return (
    <SidePanel isVisible={isVisible} onClose={onClose}>
      <Header>
        <Dialog.Title render={<Subheadline />}>
          My role <strong>settings</strong>
        </Dialog.Title>
        <CloseButton onClick={onClose} />
      </Header>
      <Form>
        <ErrorBoundary>
          <GenderSettings />
        </ErrorBoundary>
      </Form>
    </SidePanel>
  );
}

SettingsPanel.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default SettingsPanel;
