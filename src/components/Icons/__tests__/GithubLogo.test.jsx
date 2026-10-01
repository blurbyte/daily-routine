import { render } from '@testing-library/react';

import GithubLogo from '../GithubLogo';

describe('COMPONENT - Icons GithubLogo', () => {
  it('renders correctly', () => {
    const { container } = render(<GithubLogo />);

    expect(container).toMatchSnapshot();
  });
});
