import { render } from '@testing-library/react';

import Headline from '../Headline';

describe('COMPONENT - Headline', () => {
  it('renders correctly', () => {
    const { container } = render(<Headline />);

    expect(container).toMatchSnapshot();
  });
});
