import { fireEvent, render } from '@testing-library/react';

import MobileShare from '../MobileShare';

describe('COMPONENT - QuoteBubble MobileShare', () => {
  beforeEach(() => {
    navigator.share = vi.fn();
  });

  afterEach(() => {
    delete navigator.share;
  });

  it('renders correctly', () => {
    const { container } = render(<MobileShare />);

    expect(container).toMatchSnapshot();
  });

  it('calls Navigator.share API with proper title and url', () => {
    const { container } = render(<MobileShare />);

    fireEvent.click(container.querySelector('button'));

    expect(navigator.share).toBeCalledWith({
      title: document.title,
      url: window.location.href
    });
  });
});
