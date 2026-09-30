import { BACK_END_ROLE, DEV_OPS_ROLE, FRONT_END_ROLE } from '../constants/roles';
import {
  colorBlue,
  colorLightBlue,
  colorLightPurple,
  colorLightTeal,
  colorLightYellow,
  colorPurple,
  colorYellow
} from '../styles/designTokens';

function generateColors(colourVariant) {
  const composeColors = (primaryColor, secondaryColor) => ({
    primaryColor,
    secondaryColor
  });

  const colorTheme = {
    [FRONT_END_ROLE]: composeColors(colorLightYellow, colorYellow),
    [BACK_END_ROLE]: composeColors(colorLightPurple, colorPurple),
    [DEV_OPS_ROLE]: composeColors(colorLightBlue, colorBlue)
  };

  return colorTheme[colourVariant] || composeColors(colorLightTeal, colorLightTeal);
}

export default generateColors;
