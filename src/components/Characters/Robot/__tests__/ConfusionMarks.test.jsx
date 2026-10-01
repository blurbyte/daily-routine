import { render } from '@testing-library/react';

import ConfusionMarks from '../ConfusionMarks';

vi.mock('../../CharactersDecors/ConfusionMarks', () => ({ default: 'mock-confusion-marks' }));

describe('COMPONENT - Characters Robot GenderFlower', () => {
  it('renders correctly', () => {
    const { container } = render(<ConfusionMarks />);

    expect(container).toMatchSnapshot();
  });
});
