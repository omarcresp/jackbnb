import React, {FC} from 'react';
import Image from 'next/image';

import Form from '../Form';
import SecondaryButton from '../SecondaryButton';

import logoBlack from '../../assets/icon/logo-black.svg';
import FooterStyles from './index.module.css';

const Footer: FC = () => {
  const clickForm = () => {
    console.log('clickForm');
  };

  return (
    <div className={FooterStyles.container}>
      <h3 className={FooterStyles.Title}> ¿Como te podemos ayudar? </h3>

      <Form />

      <SecondaryButton width onClick={clickForm}>
        Enviar
      </SecondaryButton>

      <h4 className={FooterStyles.h4}>Colaboradores</h4>
      <h5 className={FooterStyles.h5}>¿quieres ser host?</h5>
      <h5 className={FooterStyles.h5}>Propietarios</h5>
      <h5 className={FooterStyles.h5}>Recomienda un lugar</h5>

      <h4 className={FooterStyles.h4}>Contactanos</h4>
      <h5 className={FooterStyles.h5}>00-000 000 00 000</h5>
      <h5 className={FooterStyles.h5}>Direccion</h5>
      <h5 className={FooterStyles.h5}>Razon social</h5>

      <figure className={FooterStyles.footerLogo}>
        <Image width="164px" height="35" src={logoBlack.src} />
      </figure>
    </div>
  );
};

export default Footer;
