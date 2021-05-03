import styled from 'styled-components';

import { ReactComponent as IcoLogo } from 'assets/svg/gorilla-logo-head-invert.svg';

function Navigation() {
  return (
    <Nav>
      <Container>
        <IcoLogo width={50} height={50} style={{ display: 'block' }} />
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.neutral02};
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
`;

export default Navigation;
