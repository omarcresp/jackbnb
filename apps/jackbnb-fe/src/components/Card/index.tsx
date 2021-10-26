import React , { FC } from 'react';
import CardStyles from './index.module.css'

interface CardProps {
  width?: boolean; 
}

const Card: FC <CardProps> = ({ width }) => {
    return(
        <div className={CardStyles .container}>
            <h1 className={CardStyles .h1}> <span className={CardStyles .tr}> El trabajo </span> ahora tiene otro significado </h1>
        </div>
    )
}

export default Card;