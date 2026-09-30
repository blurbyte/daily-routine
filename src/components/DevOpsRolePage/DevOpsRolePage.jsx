import { DEV_OPS_ROLE, DEV_OPS_ROLE_LABEL } from '../../constants/roles';
import ActionButtons from '../ActionButtons';
import Character from '../Character';
import Whale from '../Characters/Whale';
import ErrorBoundary from '../ErrorBoundary';
import Page from '../Page';
import RoleBar from '../RoleBar';
import RoleContent from '../RoleContent';
import Section from '../Section';
import QuoteBubble from './QuoteBubble';

function DevOpsRolePage() {
  return (
    <ErrorBoundary>
      <Page title={DEV_OPS_ROLE_LABEL}>
        <RoleBar label={DEV_OPS_ROLE_LABEL} />
        <Section>
          <RoleContent>
            <QuoteBubble />
            <Character>
              <Whale />
            </Character>
          </RoleContent>
        </Section>
        <ActionButtons role={DEV_OPS_ROLE} />
      </Page>
    </ErrorBoundary>
  );
}

export default DevOpsRolePage;
