import { render } from '@testing-library/react';

import BackEndButton from '../BackEndButton';

vi.mock('../../RedirectButton', () => ({ default: 'mock-redirect-button' }));

describe('COMPONENT - RoleButtons BackEndButton', () => {
  it('renders correctly', () => {
    const { container } = render(<BackEndButton to="/backend">Back End</BackEndButton>);

    expect(container).toMatchSnapshot();
  });
});
