import { fireEvent, render } from '@testing-library/react';

import ShareButton from '../ShareButton';

describe('COMPONENT - QuoteBubble ShareButton', () => {
  beforeEach(() => {
    navigator.share = vi.fn();
  });

  afterEach(() => {
    delete navigator.share;
  });

  it('renders correctly', () => {
    const { container } = render(<ShareButton />);

    expect(container).toMatchSnapshot();
  });

  it('calls Navigator.share API with proper title and url', () => {
    const { container } = render(<ShareButton />);

    fireEvent.click(container.querySelector('button'));

    expect(navigator.share).toBeCalledWith({
      title: document.title,
      url: window.location.href
    });
  });
});
