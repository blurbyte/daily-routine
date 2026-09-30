import { FRONT_END_ROLE, FRONT_END_ROLE_LABEL } from '../../constants/roles';
import ActionButtons from '../ActionButtons';
import Character from '../Character';
import Fox from '../Characters/Fox';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import QuoteBubble from '../QuoteBubble';
import RoleBar from '../RoleBar';
import RoleContent from '../RoleContent';
import Section from '../Section';

function FrontEndRolePage() {
  return (
    <ErrorBoundary>
      <Page title={FRONT_END_ROLE_LABEL}>
        <RoleBar label={FRONT_END_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <QuoteBubble />
            <Character>
              <Fox />
            </Character>
          </RoleContent>
        </Section>
        <ActionButtons role={FRONT_END_ROLE} />
      </Page>
    </ErrorBoundary>
  );
}

export default FrontEndRolePage;
