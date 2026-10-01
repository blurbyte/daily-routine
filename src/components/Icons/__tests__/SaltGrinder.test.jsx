import { render } from '@testing-library/react';

import SaltGrinder from '../SaltGrinder';

describe('COMPONENT - Icons SaltGrinder', () => {
  it('renders correctly', () => {
    const { container } = render(<SaltGrinder />);

    expect(container).toMatchSnapshot();
  });
});
