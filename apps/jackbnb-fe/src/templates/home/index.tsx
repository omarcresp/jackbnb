import React from 'react';
import type {NextPage} from 'next';

import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import SpaceType from '../../components/SpaceType';
import Benefits from '../../components/Benefits';
import Footer from '../../components/Footer';

const HomePage: NextPage = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <Card />

      <main>
        <article>
          <SpaceType />
        </article>

        <article>
          <Benefits />
        </article>

      </main>

      <Footer />
    </>
  );
};

export default HomePage;
