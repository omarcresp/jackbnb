import React from 'react';


import Form from '../Form'
import FormButton from '../SecondaryButton';
import FooterStyles from './index.module.css';


const Footer  = () => {
    return (
      <div className={ FooterStyles .container}>
          <h1 className={ FooterStyles .Title}> ¿Como te podemos ayudar? </h1>
          <Form/>
          <FormButton width={true} children={'Enviar'}/>
          <h1 className={ FooterStyles.h1}> Colaboradores </h1>
          <h2 className={ FooterStyles.h2}> ¿quieres ser host? </h2>
          <h2 className={ FooterStyles.h2}> Propietarios </h2>
          <h2 className={ FooterStyles.h2}> Recomienda un lugar </h2>
          <h1 className={ FooterStyles.h1}>  Contactanos </h1>
          <h2 className={ FooterStyles.h2}> 00-000 000 00 000 </h2>
          <h2 className={ FooterStyles.h2}> Direccion </h2>
          <h2 className={ FooterStyles.h2}> Razon social </h2>
           </div>
    );
  }


export default Footer;
