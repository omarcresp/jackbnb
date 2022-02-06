<<<<<<< HEAD
import React , { FC } from 'react';
import CardStyles from './index.module.css'

const Card: FC = () => {
  return(
   <div className={CardStyles.container}>
     <h1 className={CardStyles.h1}> <span className={CardStyles.tr}> El trabajo </span> ahora tiene otro significado </h1>
   </div>
    )
}
=======
import React, {FC} from 'react';
import CardStyles from './index.module.css';

const Card: FC = () => {
  return (
    <div className={CardStyles.container}>
      <h1 className={CardStyles.h1}>
        {' '}
        <span className={CardStyles.tr}> El trabajo </span> ahora tiene otro
        significado{' '}
      </h1>
    </div>
  );
};
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28

export default Card;
