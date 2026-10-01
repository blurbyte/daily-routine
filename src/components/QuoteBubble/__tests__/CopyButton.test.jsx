import { render } from '@testing-library/react';

import CopyButton from '../CopyButton';
describe('COMPONENT - QuoteBubble CopyButton', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<CopyButton valueToCopy="Taylor Swift" />);

    expect(getByRole('button', { name: 'Copy quote' })).toBeInTheDocument();
  });
});
