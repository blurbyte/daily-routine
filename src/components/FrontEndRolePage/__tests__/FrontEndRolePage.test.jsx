import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { FRONT_END_ROLE } from '../../../constants/roles';
import FrontEndRolePage from '../FrontEndRolePage';

vi.mock('../../Characters', () => ({
  Fox: 'mock-fox'
}));
vi.mock('../../ActionButtons', () => ({ default: 'mock-action-buttons' }));
vi.mock('../../RoleBar', () => ({ default: 'mock-role-bar' }));
vi.mock('../../QuoteBubble', () => ({ default: 'mock-quote-bubble' }));
vi.mock('../../Page', () => ({ default: 'mock-page' }));
vi.mock('../../RoleContent', () => ({ default: 'mock-role-content' }));
vi.mock('../../Section', () => ({ default: 'mock-section' }));
vi.mock('../../Character', () => ({ default: 'mock-character' }));
vi.mock('../../Characters/Fox', () => ({ default: 'mock-fox' }));

describe('COMPONENT - FrontEndRolePage', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[`/${FRONT_END_ROLE}`]}>
        <FrontEndRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
