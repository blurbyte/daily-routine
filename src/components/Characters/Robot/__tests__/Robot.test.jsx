import { render } from '@testing-library/react';

import { DEFAULT } from '../../../../constants/roleActions';
import Robot from '../Robot';

vi.mock('../ConfusionMarks', () => ({ default: 'mock-confusion-marks' }));
vi.mock('../RobotArtwork', () => ({ default: 'mock-robot-artwork' }));

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Robot />);

    expect(container).toMatchSnapshot();
  });

  it('renders confusion marks if robot is in default pose', () => {
    const { container } = render(<Robot pose={DEFAULT} />);

    expect(container).toMatchSnapshot();
  });
});
