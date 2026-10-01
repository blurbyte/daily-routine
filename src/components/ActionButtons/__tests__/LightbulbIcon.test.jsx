import { render } from '@testing-library/react';

import LightbulbIcon from '../LightbulbIcon';

vi.mock('../../Icons', () => ({
  Lightbulb: 'mock-lightbulb'
}));

describe('COMPONENT - ActionButtons LightbulbIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<LightbulbIcon />);

    expect(container).toMatchSnapshot();
  });
});
