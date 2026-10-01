import { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { BACK_END_ROLE, DEV_OPS_ROLE, FRONT_END_ROLE } from '../../constants/roles';
import { ROOT_PATH } from '../../constants/routes';
import { GenderProvider } from '../../context/GenderContext';
import { RouteTransitionAnimationProvider } from '../../context/RouteTransitionAnimationContext';
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

function App() {
  const location = useLocation();
  const { primaryColor, secondaryColor } = generateTheme(location.pathname);
  const theme = useMemo(() => ({ primaryColor, secondaryColor }), [primaryColor, secondaryColor]);

  return (
    <RouteTransitionAnimationProvider>
      <ThemeProvider theme={theme}>
        <>
          <RouteTransitionAnimation location={location} />
          <GenderProvider>
            <Wrapper>
              <AppBar />
              <ErrorBoundary>
                <main>
                  <Routes>
                    <Route path={ROOT_PATH} element={<LandingPage />} />
                    <Route path={`/${FRONT_END_ROLE}/*`} element={<FrontEndRolePage />} />
                    <Route path={`/${BACK_END_ROLE}/*`} element={<BackEndRolePage />} />
                    <Route path={`/${DEV_OPS_ROLE}/*`} element={<DevOpsRolePage />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
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

export default App;
