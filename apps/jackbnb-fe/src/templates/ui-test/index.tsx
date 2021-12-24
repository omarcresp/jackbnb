import React from 'react';
import type { NextPage } from 'next'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import PrimaryButton from '../../components/PrimaryButton'
import Header from '../../components/Header'


const UiTestPage: NextPage = () => {
  return (
    <div>
      <Footer />
      <Card />
      <PrimaryButton children={'Continuar'} fitParent={true}/>
      <Header />
    </div>
  );
};

export default UiTestPage;
