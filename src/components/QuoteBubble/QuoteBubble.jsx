import { useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import { use, useEffect } from 'react';
import { useLocation } from 'react-router';

import { SPEECH, THOUGHT } from '../../constants/speechBubbleVariant';
import { QuoteContext } from '../../context/QuoteContext';
import { colorWhite } from '../../styles/designTokens';
import ErrorBoundary from '../ErrorBoundary';
import Bubble from './Bubble';
import BubbleButtons from './BubbleButtons';
import BubbleTail from './BubbleTail';
import Quote from './Quote';
import trimQuote from './trimQuote';
import useBubble from './useBubble';
import Wrapper from './Wrapper';

const ERROR_MESSAGE =
  ' – The blockchain distributed ledger failed to achieve quorum with deep learning neural network of your pseudo-generated Turning complaisant daily message.';

function QuoteBubble({ className }) {
  const { pathname } = useLocation();
  const { handleQuoteChange } = use(QuoteContext);

  const bubble = useBubble(pathname);

  useEffect(() => {
    handleQuoteChange(bubble.quote);
  }, [bubble.quote, handleQuoteChange]);

  const transitions = useTransition(bubble, {
    keys: bubble => bubble.quoteID,
    from: { opacity: 0, transform: 'perspective(600px) rotateX(45deg) translateY(-20px) scale(0.8)' },
    enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg) translateY(0px) scale(1)' },
    leave: {
      opacity: 0,
      transform: 'perspective(600px) rotateX(0deg) translateY(-30px) scale(0.6)',
      color: colorWhite
    },
    config: {
      mass: 1,
      tension: 200,
      friction: 14
    },
    delay: 200
  });

  return (
    <ErrorBoundary>
      <Wrapper className={className}>
        {transitions(
          (style, item) =>
            item && (
              <Bubble style={style}>
                {item.quote ? (
                  <Quote data-testid="quote">{trimQuote(item.quote)}</Quote>
                ) : (
                  <Quote error data-testid="quote-error-message">
                    <strong>4o4 Error</strong>
                    {ERROR_MESSAGE}
                  </Quote>
                )}

                <BubbleTail variant={item.isInDefaultPose ? THOUGHT : SPEECH} />
                {!item.isInDefaultPose && item.quote && <BubbleButtons quote={item.quote} />}
              </Bubble>
            )
        )}
      </Wrapper>
    </ErrorBoundary>
  );
}

QuoteBubble.propTypes = {
  className: PropTypes.string
};

export default QuoteBubble;
