import styled from 'styled-components';

import Content from './Content';
import CraftedWithLove from './CraftedWithLove';
import Hitbox from './Hitbox';
import Link from './Link';
import Wrapper from './Wrapper';

const Text = styled(Hitbox)`
  margin: 0 0.4rem;
  padding: 0;
`;

function Footer() {
  return (
    <Wrapper>
      <Content narrow>
        <Text as="p">
          Break the routine and
          <Link href="https://buildit.wiprodigital.com/careers/" data-testid="buildit-career-link">
            join us!
          </Link>
        </Text>
        <Text as="p">
          Feed the routine and
          <Link href="https://github.com/BuildIt-Poland/daily-routine" data-testid="github-link">
            contribute!
          </Link>
        </Text>
        <CraftedWithLove />
      </Content>
    </Wrapper>
  );
}

export default Footer;
