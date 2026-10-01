import { render } from '@testing-library/react';

import CharacterWrapper from '../CharacterWrapper';

describe('COMPONENT - Characters CharacterWrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<CharacterWrapper />);

    expect(container).toMatchSnapshot();
  });
});
