import React from 'react';
import type { NextPage } from 'next'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import MyTestButton from '../../components/MyTestButton';
import PrimaryButton from '../../components/PrimaryButton'

const UiTestPage: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>
      <Footer />
      <Card /> 
      <PrimaryButton /> 
    </div>
  );
};

export default UiTestPage;
