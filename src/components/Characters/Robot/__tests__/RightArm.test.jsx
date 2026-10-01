import { render } from '@testing-library/react';

import RightArm from '../RightArm';

describe('COMPONENT - Characters Robot RightArm', () => {
  it('renders correctly', () => {
    const { container } = render(<RightArm />);

    expect(container).toMatchSnapshot();
  });
});
