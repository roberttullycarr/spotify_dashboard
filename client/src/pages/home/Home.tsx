import * as React from 'react';
import Helmet from 'react-helmet';
import { FC } from 'react';
import Navigation from 'components/Navigation';
import { useState } from 'react';
import { Section } from '../../components/section';

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
        <h1>
          Hello{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p>Let's build some cool sh*t</p>
      </Section>
    </>
  );
};

export default Home;
