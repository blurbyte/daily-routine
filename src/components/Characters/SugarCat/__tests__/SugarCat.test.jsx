import { render } from '@testing-library/react';

import SugarCat from '../SugarCat';
describe('COMPONENT - Characters SugarCat', () => {
  it('renders correct number of elements', () => {
    const { container } = render(<SugarCat />);

    // Artwork and legs
    expect(container.querySelectorAll('svg')).toHaveLength(3);
  });
});
