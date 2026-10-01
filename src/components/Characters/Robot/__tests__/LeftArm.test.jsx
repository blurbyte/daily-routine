import { render } from '@testing-library/react';

import LeftArm from '../LeftArm';

describe('COMPONENT - Characters Robot LeftArm', () => {
  it('renders correctly', () => {
    const { container } = render(<LeftArm />);

    expect(container).toMatchSnapshot();
  });
});
