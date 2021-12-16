import React from 'react';
import type { NextPage } from 'next'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import PrimaryButton from '../../components/PrimaryButton'

const UiTestPage: NextPage = () => {
  return (
    <div>
      <Footer />
      <Card />
      <PrimaryButton children={'Continuar'} fitParent={true}/>
    </div>
  );
};

export default UiTestPage;
