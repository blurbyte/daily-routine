import { cleanup, fireEvent, render } from '@testing-library/react';

import { FEMALE, MALE } from '../../constants/genders';
import { GenderContext, GenderProvider } from '../GenderContext';

function renderGenderContextConsumer(gender, handleGenderChange) {
  return (
    <>
      <span>{gender}</span>
      <button onClick={handleGenderChange} />
    </>
  );
}

afterEach(cleanup);

describe('COMPONENT - GenderContext', () => {
  it('renders GenderProvider corrently with gender `male`', () => {
    const { container } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => renderGenderContextConsumer(gender, handleGenderChange(MALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    expect(container.querySelector('span')).toHaveTextContent(MALE);
  });

  it('renders GenderProvider corrently with gender `female`', () => {
    const { container } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => renderGenderContextConsumer(gender, handleGenderChange(FEMALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelector('span')).toHaveTextContent(FEMALE);
  });
});
