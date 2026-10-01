import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import App from '../App';

vi.mock('../../RoleButtons', () => ({ default: 'mock-role-buttons' }));
vi.mock('../../AppBar', () => ({ default: 'mock-app-bar' }));
vi.mock('../../Footer', () => ({ default: 'mock-footer' }));
vi.mock('../../Characters', () => ({
  SugarCat: 'mock-sugar-cat'
}));

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const mockLocation = {
      key: 'utwyk7',
      pathname: '/'
    };

    const { container } = render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <App />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
