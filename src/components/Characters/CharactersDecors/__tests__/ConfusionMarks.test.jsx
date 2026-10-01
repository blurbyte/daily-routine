import { render } from '@testing-library/react';

import ConfusionMarks from '../ConfusionMarks';

describe('COMPONENT - Characters ConfusionMarks', () => {
  it('renders correctly', () => {
    const { container } = render(<ConfusionMarks />);

    expect(container).toMatchSnapshot();
  });
});
