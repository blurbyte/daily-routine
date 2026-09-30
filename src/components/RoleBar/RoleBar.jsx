import PropTypes from 'prop-types';

import SettingsTrigger from '../SettingsTrigger';
import Subheadline from '../Subheadline';
import Header from './Header';

function RoleBar({ label }) {
  return (
    <Header>
      <Subheadline>
        I am <strong>{label}</strong>
      </Subheadline>
      <SettingsTrigger />
    </Header>
  );
}

RoleBar.propTypes = {
  label: PropTypes.string.isRequired
};

export default RoleBar;
