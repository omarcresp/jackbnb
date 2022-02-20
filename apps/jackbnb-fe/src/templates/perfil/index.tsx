//cuarta pagina :D esta es la de foto de perfil

import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';



const Perfil = () => {
  return(
    <div>
    <h2> Agrega una foto para tu perfil </h2>

    // logo de la foto

    <PrimaryButton children={"Subir foto"} onClick={onclick}/>
    <h1> Lo hare mas tarde </h1>

    </div>
  )
}

export default Perfil;


