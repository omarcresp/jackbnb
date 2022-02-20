//la tercera pagina

import React from 'react';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';

import cStyles from '';



const Crear = () => {
  return(
    <div>
    <Input children={"Nombre"} onClick={onclick}/>
    <Input children={"Apellido"} onClick={onclick}/>
    <Input children={"Correo electronico"} onClick={onclick}/>
    <Input children={"Contraseña"} onClick={onclick}/>

    <PrimaryButton children={Continuar} onClick={onclick}/>
    <h1> ¿Ya tienes una cuenta creada? </h1>
    </div>
  )
}

export default Crear;
