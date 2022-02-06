import React from 'react';
import InStyles from './index.module.css'
import SocialButtons from '../../components/SocialButtons';

//bueno, todo joya ahora :D

const Ingresar = () => {
  return(
    <div className={InStyles.container}>
      <h1 className={InStyles.h1}> Te damos la bienvenida </h1>

      <SocialButtons/>

      <p className={InStyles.p}><a> ¿Aun no tienes una cuenta? </a></p>
    </div>
  )
}

export default Ingresar
