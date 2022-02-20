import React from 'react';
import InStyles from './index.module.css'
import SocialButtons from '../../components/SocialButtons';

/*bueno, todo joya ahora :D esta es la primera pagina, ok? donde figuran los hermosos botones de paola.
asi que acordate yasmin del futuro */

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
