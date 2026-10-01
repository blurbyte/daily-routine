import { render } from '@testing-library/react';

import Tear from '../Tear';

describe('COMPONENT - Characters Tear', () => {
  it('renders correctly', () => {
    const { container } = render(<Tear />);

    expect(container).toMatchSnapshot();
  });
});
