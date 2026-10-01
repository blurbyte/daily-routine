// Custom hook to keep data required for smooth animation tranistions

import { useMemo } from 'react';

import checkIfInDefaultPose from '../../utils/checkIfInDefaultPose';
import { extractAction, extractQuoteID, extractRole } from '../../utils/extractFromPath';
import { getQuote } from '../../utils/quotesService';

function useBubble(pathname) {
  return useMemo(() => {
    const role = extractRole(pathname);
    const action = extractAction(pathname);
    const quoteID = extractQuoteID(pathname);

    return {
      quote: getQuote(role, action, quoteID),
      quoteID,
      isInDefaultPose: checkIfInDefaultPose(pathname)
    };
  }, [pathname]);
}

export default useBubble;
