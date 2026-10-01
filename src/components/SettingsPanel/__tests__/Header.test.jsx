import { render } from '@testing-library/react';

import Header from '../Header';

describe('COMPONENT - SettingsPanel Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
