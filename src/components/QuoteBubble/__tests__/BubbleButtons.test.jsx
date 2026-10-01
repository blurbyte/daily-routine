import { render } from '@testing-library/react';

import BubbleButtons from '../BubbleButtons';

vi.mock('../CopyButton', () => ({ default: 'mock-copy-button' }));
vi.mock('../ShareButton', () => ({ default: 'mock-share-button' }));

describe('COMPONENT - QuoteBubble BubbleButtons', () => {
  afterEach(() => {
    delete navigator.share;
  });

  it('renders share button if navigator share API is available', () => {
    navigator.share = vi.fn();

    const { container } = render(<BubbleButtons quote={'Test Quote'} />);

    expect(container.querySelectorAll('mock-share-button')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  it('renders only copy button if navigator share API is NOT available', () => {
    const { container } = render(<BubbleButtons quote={'Test Quote'} />);

    expect(container.querySelectorAll('mock-share-button')).toHaveLength(0);
    expect(container.querySelectorAll('mock-copy-button')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
