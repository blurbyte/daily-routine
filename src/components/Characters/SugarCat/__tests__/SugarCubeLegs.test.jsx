import { render } from '@testing-library/react';

import SugarCubeLegs from '../SugarCubeLegs';

describe('COMPONENT - Characters SugarCat SugarCubeLegs', () => {
  it('renders correctly', () => {
    const { container } = render(<SugarCubeLegs />);

    expect(container).toMatchSnapshot();
  });
});
