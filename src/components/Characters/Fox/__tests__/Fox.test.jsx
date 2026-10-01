import { render } from '@testing-library/react';

import { FEMALE, MALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import Fox from '../Fox';

vi.mock('../GenderFlower', () => ({ default: 'mock-gender-flower' }));
vi.mock('../ConfusionMarks', () => ({ default: 'mock-confusion-marks' }));
vi.mock('../FoxArtwork', () => ({ default: 'mock-fox-artwork' }));
vi.mock('../Tail', () => ({ default: 'mock-tail' }));
vi.mock('../Frame', () => ({ default: 'mock-frame' }));

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Fox />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Fox />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders confusion marks if fox is in default pose', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Fox pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female fox is in default pose', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Fox pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
