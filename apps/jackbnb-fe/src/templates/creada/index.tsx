//pagina en la que ya tenes la cuenta creada y te aparece la fotovich y todo
import React from "react";

//importar eso de imagen de chakra :D
import { Image } from '@chakra-ui/react'
import PrimaryButton from "../../components/PrimaryButton";

const Creada = () => {
return(
  <div>
   <h1> ¡Listo!</h1>
   <Image
   borderRadius='full'
   boxSize='300px'
   src='https://bit.ly/dan-abramov'
   alt='imagen de perfil'
   />
   <PrimaryButton children={"continuar"} onClick={onclick} />
  </div>
)
}

export default Creada;
