import { render } from '@testing-library/react';

import RoleContent from '../RoleContent';

describe('COMPONENT - RoleContent', () => {
  it('renders correctly', () => {
    const { container } = render(<RoleContent />);

    expect(container).toMatchSnapshot();
  });
});
