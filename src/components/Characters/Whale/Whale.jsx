import { memo, use } from 'react';

import { FEMALE } from '../../../constants/genders';
import { CONFESS, DEFAULT } from '../../../constants/roleActions';
import { GenderContext } from '../../../context/GenderContext';
import { pose } from '../../../types';
import AnimatedWhaleShadow from './AnimatedWhaleShadow';
import ConfusionMarks from './ConfusionMarks';
import FloatingAnimationWrapper from './FloatingAnimationWrapper';
import GenderFlower from './GenderFlower';
import Tear from './Tear';
import WhaleArtwork from './WhaleArtwork';

function Whale({ pose = DEFAULT }) {
  const { gender } = use(GenderContext);

  return (
    <>
      <FloatingAnimationWrapper>
        <AnimatedWhaleShadow />
        <WhaleArtwork pose={pose} />
        {pose === CONFESS && <Tear />}
        {pose === DEFAULT && <ConfusionMarks />}
        <GenderFlower isVisible={gender === FEMALE} />
      </FloatingAnimationWrapper>
    </>
  );
}

Whale.propTypes = {
  pose
};

export default memo(Whale);
