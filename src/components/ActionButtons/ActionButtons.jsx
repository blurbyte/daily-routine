// Brag and Confess buttons for specified role

import { BRAG, CONFESS } from '../../constants/roleActions';
import { role } from '../../types';
import { getRandomQuoteID } from '../../utils/quotesService';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import Navigation from '../Navigation';
import BragButton from './BragButton';
import ConfessButton from './ConfessButton';
import Wrapper from './Wrapper';

function ActionButtons({ role }) {
  const bragQuoteID = getRandomQuoteID(role, BRAG);
  const confessQuoteID = getRandomQuoteID(role, CONFESS);

  return (
    <ErrorBoundary>
      <Wrapper>
        <Content>
          <Navigation>
            <BragButton quoteID={bragQuoteID} role={role} data-testid={`${role}-${BRAG}-button`} />
            <ConfessButton quoteID={confessQuoteID} role={role} data-testid={`${role}-${CONFESS}-button`} />
          </Navigation>
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

ActionButtons.propTypes = {
  role: role.isRequired
};

export default ActionButtons;
