import Hitbox from '../Hitbox';
import { Share } from '../Icons';

function ShareButton() {
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

export default ShareButton;
