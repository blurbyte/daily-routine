import { fireEvent, render } from '@testing-library/react';

import SidePanel from '../SidePanel';

describe('COMPONENT - SidePanel', () => {
  it('renders children when visible', () => {
    const { getByTestId } = render(<SidePanel isVisible={true}>Taylor Swift</SidePanel>);

    expect(getByTestId('side-panel')).toHaveTextContent('Taylor Swift');
  });

  it('renders nothing if not visible', () => {
    const { queryByTestId } = render(<SidePanel isVisible={false}>Taylor Swift</SidePanel>);

    expect(queryByTestId('side-panel')).toBeNull();
  });

  it('calls `onClose` when Escape key is pressed', () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <SidePanel isVisible={true} onClose={onClose}>
        Taylor Swift
      </SidePanel>
    );

    fireEvent.keyDown(getByTestId('side-panel'), { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
