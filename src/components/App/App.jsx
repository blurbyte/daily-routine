import { Route, Switch, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { BACK_END_ROLE, DEV_OPS_ROLE, FRONT_END_ROLE } from '../../constants/roles';
import { ROOT_PATH } from '../../constants/routes';
import { GenderProvider } from '../../context/GenderContext';
import { RouteTransitionAnimationProvider } from '../../context/RouteTransitionAnimationContext';
import { history, location } from '../../types';
import generateTheme from '../../utils/generateTheme';
import AppBar from '../AppBar';
import BackEndRolePage from '../BackEndRolePage';
import DevOpsRolePage from '../DevOpsRolePage';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import FrontEndRolePage from '../FrontEndRolePage';
import LandingPage from '../LandingPage';
import PageNotFound from '../PageNotFound';
import RouteTransitionAnimation from '../RouteTransitionAnimation';
import Wrapper from './Wrapper';

function App({ location, history }) {
  return (
    <RouteTransitionAnimationProvider history={history}>
      <ThemeProvider theme={generateTheme(location.pathname)}>
        <>
          <RouteTransitionAnimation location={location} />
          <GenderProvider>
            <Wrapper>
              <AppBar />
              <ErrorBoundary>
                <main>
                  <Switch>
                    <Route exact path={ROOT_PATH} component={LandingPage} />
                    <Route path={`/${FRONT_END_ROLE}`} component={FrontEndRolePage} />
                    <Route path={`/${BACK_END_ROLE}`} component={BackEndRolePage} />
                    <Route path={`/${DEV_OPS_ROLE}`} component={DevOpsRolePage} />
                    <Route path="*" component={PageNotFound} />
                  </Switch>
                </main>
              </ErrorBoundary>
              <Footer />
            </Wrapper>
          </GenderProvider>
        </>
      </ThemeProvider>
    </RouteTransitionAnimationProvider>
  );
}

App.propTypes = {
  location,
  history
};

export default withRouter(App);
