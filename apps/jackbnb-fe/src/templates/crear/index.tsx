//la tercera pagina para crearse una cuenta. lo escribo para la yasmin del futuro que es una boluda.

import React from 'react';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';

import cStyles from '.../index.module.css';



const Crear = () => {
  return(
    <div className={ cStyles.div }>
    <Input children={"Nombre"} onClick={onclick}/>
    <Input children={"Apellido"} onClick={onclick}/>
    <Input children={"Correo electronico"} onClick={onclick}/>
    <Input children={"Contraseña"} onClick={onclick}/>

    <PrimaryButton children={Continuar} onClick={onclick}/>
    <h1 className={ cStyles.h1 }> ¿Ya tienes una cuenta creada? </h1>
    </div>
  )
}

export default Crear;
