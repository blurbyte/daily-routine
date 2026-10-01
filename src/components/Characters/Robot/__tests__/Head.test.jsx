import { render } from '@testing-library/react';

import { FEMALE, MALE } from '../../../../constants/genders';
import { BRAG, CONFESS, DEFAULT } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import Head from '../Head';

vi.mock('../GenderFlower', () => ({ default: 'mock-gender-flower' }));

describe('COMPONENT - Characters Head', () => {
  it('renders confused head when pose is not set', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders sad head when 'confess' pose is provided", () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={CONFESS} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders confused head when 'default' pose is provided", () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders confident head when 'brag' pose is provided", () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={BRAG} />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const { container } = render(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Head />
      </GenderContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
