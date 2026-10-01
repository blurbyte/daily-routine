import { render } from '@testing-library/react';

import CloseButton from '../CloseButton';

vi.mock('../../Icons', () => ({
  Cross: 'mock-cross'
}));

describe('COMPONENT - SettingsPanel CloseButton', () => {
  it('renders correctly', () => {
    const { container } = render(<CloseButton />);

    expect(container).toMatchSnapshot();
  });
});
