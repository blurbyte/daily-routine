import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('COMPONENT - Footer', () => {
  it('renders crafted with love note without any links', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('footer')).toHaveTextContent('Crafted with');
    expect(container.querySelectorAll('a')).toHaveLength(0);
  });
});
