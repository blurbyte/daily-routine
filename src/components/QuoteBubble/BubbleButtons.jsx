import PropTypes from 'prop-types';
import styled from 'styled-components';

import CopyButton from './CopyButton';
import ShareButton from './ShareButton';

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
      {canUseShareAPI && <ShareButton />}
      <CopyButton valueToCopy={quote} />
    </Wrapper>
  );
}

BubbleButtons.propTypes = {
  quote: PropTypes.string.isRequired
};

export default BubbleButtons;
