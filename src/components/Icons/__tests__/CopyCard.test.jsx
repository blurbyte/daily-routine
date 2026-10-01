import { render } from '@testing-library/react';

import CopyCard from '../CopyCards';

describe('COMPONENT - Icons CopyCard', () => {
  it('renders correctly', () => {
    const { container } = render(<CopyCard />);

    expect(container).toMatchSnapshot();
  });
});
