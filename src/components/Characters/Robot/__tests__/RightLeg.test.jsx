import { render } from '@testing-library/react';

import RightLeg from '../RightLeg';

describe('COMPONENT - Characters Robot RightLeg', () => {
  it('renders correctly', () => {
    const { container } = render(<RightLeg />);

    expect(container).toMatchSnapshot();
  });
});
