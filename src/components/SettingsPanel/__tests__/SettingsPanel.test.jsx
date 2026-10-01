import { render } from '@testing-library/react';

import { GenderProvider } from '../../../context/GenderContext';
import SettingsPanel from '../SettingsPanel';
describe('COMPONENT - SettingsPanel', () => {
  it('renders closed panel correctly', () => {
    const { queryByTestId } = render(
      <GenderProvider>
        <SettingsPanel isVisible={false} onClose={vi.fn()} />
      </GenderProvider>
    );

    expect(queryByTestId('close-button')).toBeNull();
  });

  it('renders opened panel correctly', () => {
    const { getByTestId, getByRole } = render(
      <GenderProvider>
        <SettingsPanel isVisible={true} onClose={vi.fn()} />
      </GenderProvider>
    );

    expect(getByTestId('close-button')).toBeDefined();
    expect(getByRole('heading', { name: 'My role settings' })).toBeInTheDocument();
  });
});
