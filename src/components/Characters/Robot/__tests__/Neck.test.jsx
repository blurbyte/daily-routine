import { render } from '@testing-library/react';

import Neck from '../Neck';

describe('COMPONENT - Characters Robot Neck', () => {
  it('renders correctly', () => {
    const { container } = render(<Neck />);

    expect(container).toMatchSnapshot();
  });
});
