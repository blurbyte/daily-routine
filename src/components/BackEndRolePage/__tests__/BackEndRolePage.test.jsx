import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import BackEndRolePage from '../BackEndRolePage';

vi.mock('../../Characters', () => ({
  Robot: 'mock-robot'
}));
vi.mock('../../ActionButtons', () => ({ default: 'mock-action-buttons' }));
vi.mock('../../RoleBar', () => ({ default: 'mock-role-bar' }));
vi.mock('../../Page', () => ({ default: 'mock-page' }));
vi.mock('../../RoleContent', () => ({ default: 'mock-role-content' }));
vi.mock('../../Section', () => ({ default: 'mock-section' }));
vi.mock('../../Character', () => ({ default: 'mock-character' }));
vi.mock('../../Characters/Robot', () => ({ default: 'mock-robot' }));
vi.mock('../QuoteBubble', () => ({ default: 'mock-quote-bubble' }));

describe('COMPONENT - BackEndRolePage', () => {
  it('renders correctly for /backend path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/backend']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly for /backend/brag path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/backend/brag']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly for /backend/confess path', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/backend/confess']}>
        <BackEndRolePage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
