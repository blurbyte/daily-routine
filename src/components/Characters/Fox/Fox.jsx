import { memo, use } from 'react';

import { FEMALE } from '../../../constants/genders';
import { CONFESS, DEFAULT } from '../../../constants/roleActions';
import { GenderContext } from '../../../context/GenderContext';
import { pose } from '../../../types';
import ConfusionMarks from './ConfusionMarks';
import FoxArtwork from './FoxArtwork';
import Frame from './Frame';
import GenderFlower from './GenderFlower';
import Tail from './Tail';
import Tear from './Tear';
import Wrapper from './Wrapper';

function Fox({ pose = DEFAULT }) {
  const { gender } = use(GenderContext);

  return (
    <Wrapper>
      <Frame>
        <FoxArtwork pose={pose} />
        <Tail />
      </Frame>
      {pose === CONFESS && <Tear />}
      {pose === DEFAULT && <ConfusionMarks />}
      <GenderFlower isVisible={gender === FEMALE} />
    </Wrapper>
  );
}

Fox.propTypes = {
  pose
};

export default memo(Fox);
