import Hitbox from '../Hitbox';
import { Share } from '../Icons';

function MobileShare() {
  const share = () => {
    navigator.share({
      title: document.title,
      url: window.location.href
    });
  };

  return (
    <Hitbox aria-label="Share on social media" onClick={share}>
      <Share />
    </Hitbox>
  );
}

export default MobileShare;
