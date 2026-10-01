import { fireEvent, render } from '@testing-library/react';
import { use } from 'react';

import { FEMALE, MALE } from '../../constants/genders';
import { GenderContext, GenderProvider } from '../GenderContext';

function MockConsumer() {
  const { gender, handleGenderChange } = use(GenderContext);

  return (
    <>
      <span>{gender}</span>
      <button onClick={() => handleGenderChange(FEMALE)} />
    </>
  );
}

function renderProvider() {
  return render(
    <GenderProvider>
      <MockConsumer />
    </GenderProvider>
  );
}

describe('COMPONENT - GenderContext', () => {
  it('renders GenderProvider correctly with default gender `male`', () => {
    const { container } = renderProvider();

    expect(container.querySelector('span')).toHaveTextContent(MALE);
  });

  it('changes gender to `female`', () => {
    const { container } = renderProvider();

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelector('span')).toHaveTextContent(FEMALE);
  });

  it('remembers selected gender', () => {
    const { container, unmount } = renderProvider();

    fireEvent.click(container.querySelector('button'));
    unmount();

    const { container: newContainer } = renderProvider();

    expect(newContainer.querySelector('span')).toHaveTextContent(FEMALE);
  });
});
