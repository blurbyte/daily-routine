import { render } from '@testing-library/react';

import RobotArtwork from '../RobotArtwork';

vi.mock('../Head', () => ({ default: 'mock-head' }));
vi.mock('../Neck', () => ({ default: 'mock-neck' }));
vi.mock('../Chest', () => ({ default: 'mock-chest' }));
vi.mock('../Shadow', () => ({ default: 'mock-shadow' }));
vi.mock('../RightArm', () => ({ default: 'mock-right-arm' }));
vi.mock('../LeftArm', () => ({ default: 'mock-left-arm' }));
vi.mock('../RightLeg', () => ({ default: 'mock-right-leg' }));
vi.mock('../LeftLeg', () => ({ default: 'mock-left-leg' }));

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly', () => {
    const { container } = render(<RobotArtwork />);

    expect(container).toMatchSnapshot();
  });
});
