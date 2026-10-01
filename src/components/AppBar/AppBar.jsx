import { memo } from 'react';

import Logo from './Logo';
import Wrapper from './Wrapper';

function AppBar() {
  return (
    <Wrapper role="banner">
      <Logo />
    </Wrapper>
  );
}

export default memo(AppBar);
