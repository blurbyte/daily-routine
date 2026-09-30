import { BACK_END_ROLE, DEV_OPS_ROLE, FRONT_END_ROLE } from '../../constants/roles';
import {
  colorBlue,
  colorLightBlue,
  colorLightPurple,
  colorLightTeal,
  colorLightYellow,
  colorPurple,
  colorYellow
} from '../../styles/designTokens';
import generateTheme from '../generateTheme';

describe('FUNC - generateTheme', () => {
  it('should return default color', () => {
    const expectedTheme = {
      primaryColor: colorLightTeal,
      secondaryColor: colorLightTeal
    };

    const theme = generateTheme('');

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for FRONT_END_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightYellow,
      secondaryColor: colorYellow
    };

    const theme = generateTheme(FRONT_END_ROLE);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for BACK_END_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightPurple,
      secondaryColor: colorPurple
    };

    const theme = generateTheme(BACK_END_ROLE);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for DEV_OPS_VARIANT', () => {
    const expectedTheme = {
      primaryColor: colorLightBlue,
      secondaryColor: colorBlue
    };

    const theme = generateTheme(DEV_OPS_ROLE);

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });

  it('should return default color theme for unknown path', () => {
    const expectedTheme = {
      primaryColor: colorLightTeal,
      secondaryColor: colorLightTeal
    };

    const theme = generateTheme('/test');

    expect(theme.primaryColor).toEqual(expectedTheme.primaryColor);
    expect(theme.secondaryColor).toEqual(expectedTheme.secondaryColor);
  });
});
