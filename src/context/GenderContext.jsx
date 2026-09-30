import PropTypes from 'prop-types';
import { createContext } from 'react';

import { MALE } from '../constants/genders';
import useLocalStorage from '../hooks/useLocalStorage';

const GenderContext = createContext();

const GENDER_LOCAL_STORAGE_KEY = 'DAILY_ROUTINE_GENDER';

function GenderProvider({ children }) {
  const [gender, setGender] = useLocalStorage(GENDER_LOCAL_STORAGE_KEY, MALE);

  const handleGenderChange = gender => setGender(gender);

  return <GenderContext value={{ gender, handleGenderChange }}>{children}</GenderContext>;
}

GenderProvider.propTypes = {
  children: PropTypes.node
};

export { GenderContext, GenderProvider };
