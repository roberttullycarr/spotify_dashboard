import styled from 'styled-components';
import SpotifyLogo from 'assets/images/spotify_logo_green.png';
import { useHistory } from 'react-router';
import React from 'react';

interface Props {
  setPage(arg: string): void;
}

const Navigation: React.FC<Props> = ({ setPage }) => {
  const history = useHistory();
  return (
    <Nav>
      <NavSection>
        <Logo src={SpotifyLogo} />
        <NavTitle>Spotify Dashboard</NavTitle>
      </NavSection>
      <NavSection>
        <NavBtn onClick={() => setPage('/')}>Home</NavBtn>
        <NavBtn onClick={() => setPage('/profile')}>Profile</NavBtn>
      </NavSection>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.neutral02};
`;

const Logo = styled.img`
  height: 50%;
  aspect-ratio: 1/1;
`;

const NavSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 23px;
`;

const NavTitle = styled.h2`
  color: white;
  padding-left: 18px;
`;

const NavBtn = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.palette.neutral01};
  margin-left: 10px;

  :hover {
    cursor: pointer;
  }
`;

export default Navigation;
