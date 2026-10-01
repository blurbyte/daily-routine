import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { BACK_END_ROLE } from '../../../constants/roles';
import ActionButtons from '../ActionButtons';

vi.mock('../../../utils/quotesService.js', () => ({
  getRandomQuoteID: () => '1'
}));
describe('COMPONENT - ActionButtons', () => {
  it('renders correct all roles button', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <ActionButtons role={BACK_END_ROLE} />
      </MemoryRouter>
    );

    expect(container.querySelector('nav')).toBeDefined();
    expect(container.querySelectorAll('a')[0]).toHaveTextContent('Brag');
    expect(container.querySelectorAll('a')[1]).toHaveTextContent('Confess');
  });
});
