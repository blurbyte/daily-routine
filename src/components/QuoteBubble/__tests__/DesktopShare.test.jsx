import { fireEvent, render } from '@testing-library/react';

import { FACEBOOK, TWITTER } from '../../../constants/socialMedia';
import DesktopShare from '../DesktopShare';

describe('COMPONENT - QuoteBubble DesktopShare', () => {
  it('renders correctly for Facebook variant', () => {
    const { container } = render(<DesktopShare variant={FACEBOOK} />);

    expect(container).toMatchSnapshot();
  });

  it('renders correctly for Twitter variant', () => {
    const { container } = render(<DesktopShare variant={TWITTER} />);

    expect(container).toMatchSnapshot();
  });

  it('opens share window with proper url', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => {});
    const { container } = render(<DesktopShare variant={FACEBOOK} />);

    fireEvent.click(container.querySelector('button'));

    const expectedShareUrl = `http://www.facebook.com/sharer.php?u=${window.location.href}`;
    const expectedWindowName = 'shareWindow';
    const expectedWindowFeatures =
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=275';

    expect(open).toBeCalledWith(expectedShareUrl, expectedWindowName, expectedWindowFeatures);

    open.mockRestore();
  });
});
