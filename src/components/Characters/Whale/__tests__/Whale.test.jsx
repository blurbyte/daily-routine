import { render } from '@testing-library/react';

import { FEMALE, MALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import Whale from '../Whale';

vi.mock('../GenderFlower', () => ({ default: 'mock-gender-flower' }));
vi.mock('../ConfusionMarks', () => ({ default: 'mock-confusion-marks' }));
vi.mock('../WhaleArtwork', () => ({ default: 'mock-whale-artwork' }));
vi.mock('../AnimatedWhaleShadow', () => ({ default: 'mock-animated-whale-shadow' }));

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Whale />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Whale />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders confusion marks if whale is in default pose', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Whale pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female whale is in default pose', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Whale pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
