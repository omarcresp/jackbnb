import { React, FC } from "react";
import inputStyles from "./index.module.css";


interface inputProps {
  fitParent?: boolean;
  onClick: () => void;
}


//aca voy a hacer el formulario por separado
const Input: FC<inputProps> = ({ children, fitParent, onClick }) => {
return(
  <div className={inputStyles.contaner}>

    <input className={inputStyles.input}> {children} </input>

  </div>
)}

export default Input;
