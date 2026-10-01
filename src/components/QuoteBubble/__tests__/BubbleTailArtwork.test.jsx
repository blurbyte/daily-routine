import { render } from '@testing-library/react';

import { SPEECH, THOUGHT } from '../../../constants/speechBubbleVariant';
import BubbleTailArtwork from '../BubbleTailArtwork';

describe('COMPONENT - QuoteBubble BubbleTailArtwork', () => {
  it("renders correctly when 'speech' variant is passed", () => {
    const { container } = render(<BubbleTailArtwork variant={SPEECH} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when 'thought' variant is passed", () => {
    const { container } = render(<BubbleTailArtwork variant={THOUGHT} />);

    expect(container).toMatchSnapshot();
  });
});
