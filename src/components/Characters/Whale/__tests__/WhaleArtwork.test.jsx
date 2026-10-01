import { render } from '@testing-library/react';

import WhaleArtwork from '../WhaleArtwork';

describe('COMPONENT - Characters Whale', () => {
  it('renders confused robot when pose is not set', () => {
    const { container } = render(<WhaleArtwork />);

    expect(container).toMatchSnapshot();
  });

  it("renders sad robot when 'confess' pose is provided", () => {
    const { container } = render(<WhaleArtwork pose="confess" />);

    expect(container).toMatchSnapshot();
  });

  it("renders confused robot when 'default' pose is provided", () => {
    const { container } = render(<WhaleArtwork pose="default" />);

    expect(container).toMatchSnapshot();
  });

  it("renders confident robot when 'brag' pose is provided", () => {
    const { container } = render(<WhaleArtwork pose="brag" />);

    expect(container).toMatchSnapshot();
  });
});
