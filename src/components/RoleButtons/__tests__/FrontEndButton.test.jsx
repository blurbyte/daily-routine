import { render } from '@testing-library/react';

import FrontEndButton from '../FrontEndButton';

vi.mock('../../RedirectButton', () => ({ default: 'mock-redirect-button' }));

describe('COMPONENT - RoleButtons FrontEndButton', () => {
  it('renders correctly', () => {
    const { container } = render(<FrontEndButton to="/frontend">Front End</FrontEndButton>);

    expect(container).toMatchSnapshot();
  });
});
