import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

describe('COMPONENT - Error Wrapper', () => {
  it('render Cart component', () => {
    const { container } = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });
});
