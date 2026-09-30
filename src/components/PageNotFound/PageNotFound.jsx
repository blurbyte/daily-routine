import { ROOT_PATH } from '../../constants/routes';
import { SugarCat } from '../Characters';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import Headline from '../Headline';
import Navigation from '../Navigation';
import RedirectButton from '../RedirectButton';
import Section from '../Section';
import Subheadline from '../Subheadline';
import Page from './Page';
import Wrapper from './Wrapper';

function PageNotFound() {
  return (
    <ErrorBoundary>
      <Page title="404 - Page not found">
        <Section>
          <Content>
            <Headline>404 - Page not found</Headline>
            <Subheadline>You're in the wrong place.</Subheadline>
            <SugarCat />
          </Content>
        </Section>
        <Wrapper>
          <Content>
            <Navigation>
              <RedirectButton to={ROOT_PATH}>Take me home</RedirectButton>
            </Navigation>
          </Content>
        </Wrapper>
      </Page>
    </ErrorBoundary>
  );
}

export default PageNotFound;
