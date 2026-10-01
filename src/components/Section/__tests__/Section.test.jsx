import { render } from '@testing-library/react';

import Section from '../Section';

describe('COMPONENT - Section', () => {
  it('renders correctly', () => {
    const { container } = render(<Section />);

    expect(container).toMatchSnapshot();
  });
});
