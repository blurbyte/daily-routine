import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import DevOpsRolePage from '../DevOpsRolePage';

vi.mock('../../Characters', () => ({
  Whale: 'mock-whale'
}));
vi.mock('../../ActionButtons', () => ({ default: 'mock-action-buttons' }));
vi.mock('../../RoleBar', () => ({ default: 'mock-role-bar' }));
vi.mock('../../Page', () => ({ default: 'mock-page' }));
vi.mock('../../RoleContent', () => ({ default: 'mock-role-content' }));
vi.mock('../../Section', () => ({ default: 'mock-section' }));
vi.mock('../../Character', () => ({ default: 'mock-character' }));
vi.mock('../../Characters/Whale', () => ({ default: 'mock-whale' }));
vi.mock('../QuoteBubble', () => ({ default: 'mock-quote-bubble' }));

describe('COMPONENT - DevOpsRolePage', () => {
  it('renders correctly for /devops path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/devops']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly for /devops/brag path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/devops/brag']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly for /devops/confess path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/devops/confess']}>
        <DevOpsRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
