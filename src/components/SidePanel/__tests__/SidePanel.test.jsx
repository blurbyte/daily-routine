import { render } from '@testing-library/react';

import SidePanel from '../SidePanel';

describe('COMPONENT - SidePanel', () => {
  it('renders correctly when visible', () => {
    const { container } = render(<SidePanel isVisible={true}>Taylor Swift</SidePanel>);

    expect(container).toMatchSnapshot();
  });

  it('renders nothing if not visible', () => {
    const { container } = render(<SidePanel isVisible={false}>Taylor Swift</SidePanel>);

    expect(container).toMatchSnapshot();
  });
});
