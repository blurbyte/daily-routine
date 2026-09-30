import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FACEBOOK, TWITTER } from '../../constants/socialMedia';
import CopyButton from './CopyButton';
import DesktopShare from './DesktopShare';
import MobileShare from './MobileShare';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
  padding-right: 0.8rem;
`;

function BubbleButtons({ quote }) {
  const canUseShareAPI = !!navigator.share;

  return (
    <Wrapper>
      {canUseShareAPI && <MobileShare />}
      {!canUseShareAPI && (
        <>
          <DesktopShare variant={FACEBOOK} />
          <DesktopShare variant={TWITTER} />
        </>
      )}
      <CopyButton valueToCopy={quote} />
    </Wrapper>
  );
}

BubbleButtons.propTypes = {
  quote: PropTypes.string.isRequired
};

export default BubbleButtons;
