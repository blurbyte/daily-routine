import { render } from '@testing-library/react';

import Lightbulb from '../Lightbulb';

describe('COMPONENT - Icons Lightbulb', () => {
  it('renders correctly', () => {
    const { container } = render(<Lightbulb />);

    expect(container).toMatchSnapshot();
  });
});
