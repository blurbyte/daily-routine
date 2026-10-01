import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

describe('COMPONENT - Characters SugarCat Wrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });
});
