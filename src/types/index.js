// Centralised type definitions for common cases

import { oneOf, shape, string } from 'prop-types';

import { FEMALE, MALE } from '../constants/genders';
import { BRAG, CONFESS, DEFAULT } from '../constants/roleActions';
import { BACK_END_ROLE, DEV_OPS_ROLE, FRONT_END_ROLE } from '../constants/roles';
import { FACEBOOK, TWITTER } from '../constants/socialMedia';
import { SPEECH, THOUGHT } from '../constants/speechBubbleVariant';

export const role = oneOf([FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE]);
export const gender = oneOf([MALE, FEMALE]);
export const pose = oneOf([DEFAULT, BRAG, CONFESS]);

export const theme = shape({
  primaryColor: string.isRequired,
  secondaryColor: string.isRequired
});

export const speechBubbleVariant = oneOf([SPEECH, THOUGHT]);
export const socialMediaVariant = oneOf([FACEBOOK, TWITTER]);
