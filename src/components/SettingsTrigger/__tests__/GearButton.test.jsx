import { render } from '@testing-library/react';

import GearButton from '../GearButton';

vi.mock('../../Icons', () => ({
  Gear: 'mock-gear'
}));

describe('COMPONENT - SettingsTrigger GearButton', () => {
  it('renders correctly', () => {
    const { container } = render(<GearButton />);

    expect(container).toMatchSnapshot();
  });
});
