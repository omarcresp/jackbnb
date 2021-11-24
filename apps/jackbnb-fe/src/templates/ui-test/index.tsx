import React from 'react';
import type { NextPage } from 'next'

import MyTestButton from '../../components/MyTestButton';
import NavBar from '../../components/NavBar';
import SpaceType from '../../components/SpaceType';
import Benefits from '../../components/Benefits';

const UiTestPage: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>
      <NavBar></NavBar>
      <SpaceType></SpaceType>
      <Benefits></Benefits>

    </div>
  )
};

export default UiTestPage;
