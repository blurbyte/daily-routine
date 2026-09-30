import { use } from 'react';

import { FEMALE, MALE } from '../../constants/genders';
import { GenderContext } from '../../context/GenderContext';
import Description from './Description';
import RadioButton from './RadioButton';
import Wrapper from './Wrapper';

function GenderSettings() {
  const { gender, handleGenderChange } = use(GenderContext);

  const onGenderChange = event => handleGenderChange(event.target.value);

  return (
    <>
      <Description>Gender</Description>
      <Wrapper>
        <RadioButton data-testid="male-button" value={MALE} checked={gender === MALE} onChange={onGenderChange}>
          Male
        </RadioButton>
        <RadioButton data-testid="female-button" value={FEMALE} checked={gender === FEMALE} onChange={onGenderChange}>
          Female
        </RadioButton>
      </Wrapper>
    </>
  );
}

export default GenderSettings;
