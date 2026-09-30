import { SugarCat } from '../Characters';
import Content from '../Content';
import ErrorBoundary from '../ErrorBoundary';
import Headline from '../Headline';
import RoleButtons from '../RoleButtons';
import Section from '../Section';
import Subheadline from '../Subheadline';
import Page from './Page';

function LandingPage() {
  return (
    <ErrorBoundary>
      <Page>
        <Section>
          <Content>
            <Headline>Daily Scrum is coming!</Headline>
            <Subheadline>Don't know what to say? Worry not &ndash; we got your back!</Subheadline>
            <SugarCat />
          </Content>
        </Section>
        <RoleButtons />
      </Page>
    </ErrorBoundary>
  );
}

export default LandingPage;
