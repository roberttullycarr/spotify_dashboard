import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from 'components/Navigation';

function Home() {
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
}

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
`;

export default Home;
