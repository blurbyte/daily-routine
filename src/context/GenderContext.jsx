import PropTypes from 'prop-types';
import { createContext, useMemo } from 'react';

import { MALE } from '../constants/genders';
import useLocalStorage from '../hooks/useLocalStorage';

const GenderContext = createContext();

const GENDER_LOCAL_STORAGE_KEY = 'DAILY_ROUTINE_GENDER';

function GenderProvider({ children }) {
  const [gender, setGender] = useLocalStorage(GENDER_LOCAL_STORAGE_KEY, MALE);

  const value = useMemo(() => ({ gender, handleGenderChange: setGender }), [gender, setGender]);

  return <GenderContext value={value}>{children}</GenderContext>;
}

GenderProvider.propTypes = {
  children: PropTypes.node
};

export { GenderContext, GenderProvider };
