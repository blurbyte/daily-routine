import { render } from '@testing-library/react';

import SugarCatArtwork from '../SugarCatArtwork';

describe('COMPONENT - Characters SugarCat SugarCatArtwork', () => {
  it('renders correctly', () => {
    const { container } = render(<SugarCatArtwork />);

    expect(container).toMatchSnapshot();
  });
});
