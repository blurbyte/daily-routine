import { render } from '@testing-library/react';

import Subheadline from '../Subheadline';

describe('COMPONENT - Subheadline', () => {
  it('renders correctly', () => {
    const { container } = render(<Subheadline />);

    expect(container).toMatchSnapshot();
  });
});
