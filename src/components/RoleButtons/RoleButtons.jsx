// Set of links to various roles

import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import Headline from '../Headline';
import Navigation from '../Navigation';
import BackEndButton from './BackEndButton';
import DevOpsButton from './DevOpsButton';
import FrontEndButton from './FrontEndButton';
import Wrapper from './Wrapper';

function RoleButtons() {
  return (
    <ErrorBoundary>
      <Wrapper>
        <Content>
          <Headline>Pick your role!</Headline>
          <Navigation>
            <FrontEndButton />
            <BackEndButton />
            <DevOpsButton />
          </Navigation>
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default RoleButtons;
