import { render } from '@testing-library/react';

import Frame from '../Frame';

describe('COMPONENT - Characters SugarCat Frame', () => {
  it('renders correctly', () => {
    const { container } = render(<Frame />);

    expect(container).toMatchSnapshot();
  });
});
