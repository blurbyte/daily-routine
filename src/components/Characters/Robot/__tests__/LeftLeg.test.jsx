import { render } from '@testing-library/react';

import LeftLeg from '../LeftLeg';

describe('COMPONENT - Characters Robot LeftLeg', () => {
  it('renders correctly', () => {
    const { container } = render(<LeftLeg />);

    expect(container).toMatchSnapshot();
  });
});
