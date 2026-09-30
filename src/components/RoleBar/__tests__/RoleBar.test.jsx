import { create } from 'react-test-renderer';

import { FRONT_END_ROLE_LABEL } from '../../../constants/roles';
import RoleBar from '../RoleBar';

jest.mock('../../Icons/Gear', () => 'GearIcon');

describe('COMPONENT - RoleBar', () => {
  it('renders correctly', () => {
    const component = create(<RoleBar label={FRONT_END_ROLE_LABEL} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
