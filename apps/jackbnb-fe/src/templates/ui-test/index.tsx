import React from 'react';
import type { NextPage } from 'next'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import PrimaryButton from '../../components/PrimaryButton'
import Header from '../../components/Header'
import FormButton from '../../components/SecondaryButton';

<<<<<<< HEAD

=======
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
const UiTestPage: NextPage = () => {
  const click = () => {
    console.log('oli')
  }
  return (
<<<<<<< HEAD
    <div>
      <Footer />
      <Card />
      <PrimaryButton children={'Continuar'} fitParent={true} onClick={click} />
      <FormButton  children={'hola'} onClick={click}/>
      <Header />
    </div>
=======
    <>
      <h1>Hello</h1>
    </>
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
  );
};

export default UiTestPage;
