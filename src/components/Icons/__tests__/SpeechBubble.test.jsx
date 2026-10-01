import { render } from '@testing-library/react';

import SpeechBubble from '../SpeechBubble';

describe('COMPONENT - Icons SpeechBubble', () => {
  it('renders correctly when no variant is passed', () => {
    const { container } = render(<SpeechBubble />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when 'speech' variant is passed", () => {
    const { container } = render(<SpeechBubble variant="speech" />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when 'thought' variant is passed", () => {
    const { container } = render(<SpeechBubble variant="thought" />);

    expect(container).toMatchSnapshot();
  });
});
