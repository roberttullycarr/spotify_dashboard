import * as React from 'react';
import Helmet from 'react-helmet';
import { FC } from 'react';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import { Section } from '../../components/section';
import SearchResults from '../../components/searchResults';
import Player from '../../components/player';
import styled from 'styled-components';
import Favorites from '../../components/favorites';

const ContentRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

const Home: FC = () => {
  const [token] = useState<string>(localStorage.access);
  const [page, setPage] = useState<string>('/');

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page" />
      </Helmet>
      <Navigation />
      <Section>
        <ContentRow>
          <SearchResults />
        </ContentRow>
        <ContentRow>
          <Player />
          <Favorites />
        </ContentRow>
      </Section>
    </>
  );
};

export default Home;
