import { render } from '@testing-library/react';

import { FRONT_END_ROLE_LABEL } from '../../../constants/roles';
import RoleBar from '../RoleBar';

vi.mock('../../Icons/Gear', () => ({ default: 'mock-gear-icon' }));

describe('COMPONENT - RoleBar', () => {
  it('renders correctly', () => {
    const { container } = render(<RoleBar label={FRONT_END_ROLE_LABEL} />);

    expect(container).toMatchSnapshot();
  });
});
