import { render } from '@testing-library/react';

import CraftedWithLove from '../CraftedWithLove';
describe('COMPONENT - Footer CraftedWithLove', () => {
  it('renders Heart and Buildit icons', () => {
    const { container, getByLabelText } = render(<CraftedWithLove />);

    expect(container.querySelector('a')).toBeDefined();
    expect(getByLabelText('love')).toBeInTheDocument();
    expect(getByLabelText('buildit @ wipro digital')).toBeInTheDocument();
  });
});
