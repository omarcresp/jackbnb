/* para la yasmin del futuro: acordate que esta es la segunda pagina, donde ingresas tus datos cuando ya
se tiene una cuenta registrada */

import React from 'react';
import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';



const Login = () => {
  return(
    <div>
    <Input children={"Correo electronico"} onClick={onclick}/>
    <Input children={"Contraseña"} onClick={onclick}/>
    <h1> ¿Olvidaste tu contraseña? </h1>

    <PrimaryButton children={"continuar"} onClick={onclick}/>
    <h1> ¿Aun no tienes una cuenta? </h1>

    </div>
  )
}

export default Login;
