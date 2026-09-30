import { CONFESS, DEFAULT } from '../../../constants/roleActions';
import { pose } from '../../../types';
import ConfusionMarks from './ConfusionMarks';
import RobotArtwork from './RobotArtwork';
import Tear from './Tear';
import Wrapper from './Wrapper';

function Robot({ pose = DEFAULT }) {
  return (
    <Wrapper>
      <RobotArtwork pose={pose} />
      {pose === CONFESS && <Tear />}
      {pose === DEFAULT && <ConfusionMarks />}
    </Wrapper>
  );
}

Robot.propTypes = {
  pose
};

export default Robot;
