import React from 'react';
import type {NextPage} from 'next';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';
import FormButton from '../../components/SecondaryButton';

const UiTestPage: NextPage = () => {
  const click = () => {
    console.log('oli');
  };

  return (
    <div>
      <Footer />
      <Card />
      <PrimaryButton fitParent onClick={click}>
        Continuar
      </PrimaryButton>
      <FormButton width onClick={click}>
        hola
      </FormButton>
      <Header fitParent />
    </div>
  );
};

/**
 * FIXME: This is a workaround to avoid the error:
 * Error occurred pre-rendering page "/ui-test".
 * TypeError: Cannot read properties of undefined (reading 'onToggle')
 */
UiTestPage.getInitialProps = async () => {
  return {};
};

export default UiTestPage;
