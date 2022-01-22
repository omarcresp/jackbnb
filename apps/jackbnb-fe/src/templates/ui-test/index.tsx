import React from 'react';
import type { NextPage } from 'next'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import PrimaryButton from '../../components/PrimaryButton'
import Header from '../../components/Header'
import FormButton from '../../components/SecondaryButton';


const UiTestPage: NextPage = () => {
  const click = () => {
    console.log('oli')
  }
  return (
    <div>
      <Footer />
      <Card />
      <PrimaryButton children={'Continuar'} fitParent={true} onClick={click} />
      <FormButton  children={'hola'} onClick={click}/>
      <Header />
    </div>
  );
};

export default UiTestPage;
