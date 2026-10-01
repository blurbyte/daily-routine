import { render } from '@testing-library/react';

import CopyNotification from '../CopyNotification';

describe('COMPONENT - QuoteBubble CopyNotification', () => {
  it('renders correctly', () => {
    const { container } = render(<CopyNotification isVisible={true} onFinished={vi.fn()} />);

    expect(container).toMatchSnapshot();
  });

  it('renders nothing when not visible', () => {
    const onFinished = vi.fn();
    const { queryByTestId } = render(<CopyNotification isVisible={false} onFinished={onFinished} />);

    expect(queryByTestId('copy-notification')).toBeNull();
    expect(onFinished).not.toHaveBeenCalled();
  });

  it('calls `onFinished` right after it shows up', () => {
    const onFinished = vi.fn();
    render(<CopyNotification isVisible={true} onFinished={onFinished} />);

    expect(onFinished).toHaveBeenCalledTimes(1);
  });
});
