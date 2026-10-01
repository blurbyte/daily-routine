import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { BRAG, CONFESS, DEFAULT } from '../../../constants/roleActions';
import { QuoteContext } from '../../../context/QuoteContext';
import { pose } from '../../../types';
import Character from '../Character';

function MockCharacter({ pose }) {
  return <div data-testid="mock-character">{pose}</div>;
}

MockCharacter.propTypes = {
  pose
};

function renderCharacter(path, quote) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <QuoteContext.Provider value={{ quote, handleQuoteChange: vi.fn() }}>
        <Character>
          <MockCharacter />
        </Character>
      </QuoteContext.Provider>
    </MemoryRouter>
  );
}

describe('COMPONENT - Character', () => {
  it('should render character component with default pose on role root path', () => {
    const { getByTestId } = renderCharacter('/frontend', 'Taylor Swift');

    expect(getByTestId('mock-character')).toHaveTextContent(DEFAULT);
  });

  it('should render character component with brag pose', () => {
    const { getByTestId } = renderCharacter('/frontend/brag/1', 'Taylor Swift');

    expect(getByTestId('mock-character')).toHaveTextContent(BRAG);
  });

  it('should render character component with confess pose when there is no quote', () => {
    const { getByTestId } = renderCharacter('/frontend/brag/1', undefined);

    expect(getByTestId('mock-character')).toHaveTextContent(CONFESS);
  });
});
