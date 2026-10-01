import { render } from '@testing-library/react';

import DevOpsButton from '../DevOpsButton';

vi.mock('../../RedirectButton', () => ({ default: 'mock-redirect-button' }));

describe('COMPONENT - RoleButtons DevOpsButton', () => {
  it('renders correctly', () => {
    const { container } = render(<DevOpsButton to="/devops">Dev Ops</DevOpsButton>);

    expect(container).toMatchSnapshot();
  });
});
