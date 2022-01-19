import React from 'react';
import type {NextPage} from 'next';

import NavBar from '../../components/NavBar';
import SpaceType from '../../components/SpaceType';
import Benefits from '../../components/Benefits';

const UiTestPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <SpaceType />
      <Benefits />
    </>
  );
};

export default UiTestPage;
