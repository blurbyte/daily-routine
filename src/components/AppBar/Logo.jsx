import { useContext } from 'react';
import { Link as LinkBase, useLocation } from 'react-router';
import styled from 'styled-components';

import { ROOT_PATH } from '../../constants/routes';
import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import { borderRadius, borderWidthThin, colorBlack, colorPink, spacingSmall } from '../../styles/designTokens';
import media from '../../styles/media';
import { Logo as LogoIcon } from '../Icons';

const Link = styled(LinkBase)`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 4.8rem;
  border-radius: ${borderRadius};
  cursor: pointer;
  outline: 0;
  padding: 0 ${spacingSmall};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 150ms linear;

  &:focus-visible {
    background-color: ${colorPink};
  }

  ${media.phone`
    padding: 0;
  `};
`;

const LogoWrapper = styled.div`
  padding-top: 0.6rem;
  padding-right: ${spacingSmall};
  margin-right: ${spacingSmall};
  border-right: ${borderWidthThin} solid ${colorBlack};
`;

const Tagline = styled.p`
  margin: 0;
  padding: 0;
  color: ${colorBlack};
  font-size: 1.2rem;
  line-height: 1.2;
  text-transform: uppercase;
`;

function Logo() {
  const location = useLocation();
  const { animateAndRedirect } = useContext(RouteTransitionAnimationContext);

  function isRootPath(location) {
    return location.pathname !== ROOT_PATH;
  }

  function handleClick(e) {
    e.preventDefault();
    if (isRootPath(location)) {
      animateAndRedirect(ROOT_PATH);
    }
  }

  return (
    <Link onClick={handleClick} to={ROOT_PATH} data-testid="logo">
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Tagline>
        Daily scrum <br />
        absurd answers
      </Tagline>
    </Link>
  );
}

export default Logo;
