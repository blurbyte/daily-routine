import Frame from './Frame';
import SugarCatArtwork from './SugarCatArtwork';
import SugarCubeLegs from './SugarCubeLegs';
import Wrapper from './Wrapper';

function SugarCat() {
  return (
    <Wrapper>
      <Frame>
        <SugarCatArtwork />
        <SugarCubeLegs />
      </Frame>
    </Wrapper>
  );
}

export default SugarCat;
