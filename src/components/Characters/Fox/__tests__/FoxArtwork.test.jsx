import { render } from '@testing-library/react';

import FoxArtwork from '../FoxArtwork';

describe('COMPONENT - Characters Fox', () => {
  it('renders confused Fox when pose is not set', () => {
    const { container } = render(<FoxArtwork />);

    expect(container).toMatchSnapshot();
  });

  it("renders sad Fox when 'confess' pose is provided", () => {
    const { container } = render(<FoxArtwork pose="confess" />);

    expect(container).toMatchSnapshot();
  });

  it("renders confused Fox when 'default' pose is provided", () => {
    const { container } = render(<FoxArtwork pose="default" />);

    expect(container).toMatchSnapshot();
  });

  it("renders confident Fox when 'brag' pose is provided", () => {
    const { container } = render(<FoxArtwork pose="brag" />);

    expect(container).toMatchSnapshot();
  });
});
