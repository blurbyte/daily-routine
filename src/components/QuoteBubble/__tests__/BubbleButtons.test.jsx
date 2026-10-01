import { render } from '@testing-library/react';

import BubbleButtons from '../BubbleButtons';

vi.mock('../CopyButton', () => ({ default: 'mock-copy-button' }));
vi.mock('../DesktopShare', () => ({ default: 'mock-desktop-share' }));
vi.mock('../MobileShare', () => ({ default: 'mock-mobile-share' }));

describe('COMPONENT - QuoteBubble BubbleButtons', () => {
  afterEach(() => {
    delete navigator.share;
  });

  it('renders correctly if navigator share API is available', () => {
    navigator.share = vi.fn();

    const { container } = render(<BubbleButtons quote={'Test Quote'} />);

    expect(container.querySelectorAll('mock-mobile-share')).toHaveLength(1);
    expect(container.querySelectorAll('mock-desktop-share')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly if navigator share API is NOT available', () => {
    const { container } = render(<BubbleButtons quote={'Test Quote'} />);

    expect(container.querySelectorAll('mock-mobile-share')).toHaveLength(0);
    expect(container.querySelectorAll('mock-desktop-share')).toHaveLength(2);
    expect(container).toMatchSnapshot();
  });
});
