import styled from 'styled-components';

import { DEFAULT } from '../../../constants/roleActions';
import { pose } from '../../../types';
import Chest from './Chest';
import Head from './Head';
import LeftArm from './LeftArm';
import LeftLeg from './LeftLeg';
import Neck from './Neck';
import RighArm from './RightArm';
import RightLeg from './RightLeg';
import Shadow from './Shadow';

const Frame = styled.div`
  position: relative;
  height: 24.4rem;
  width: 14.8rem;
  color: ${({ theme }) => theme.primaryColor};
`;

function RobotArtwork({ pose = DEFAULT }) {
  return (
    <Frame>
      <Head pose={pose} />
      <Neck />
      <Chest />
      <RighArm />
      <LeftArm />
      <RightLeg />
      <LeftLeg />
      <Shadow />
    </Frame>
  );
}

RobotArtwork.propTypes = {
  pose
};

export default RobotArtwork;
