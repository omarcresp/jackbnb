import React, {FC} from 'react';
import Image from 'next/image';

import CardStyles from './index.module.css';
import logoIconWhite from '../../assets/icon/logo-icon-white.svg';

const Card: FC = () => {
  return (
    <div className={CardStyles.cardContainer}>
      <h2 className={CardStyles.cardTitle}>
        <span className={CardStyles.cardTitleGreen}>El trabajo</span> ahora
        tiene otro significado
      </h2>

      <figure className={CardStyles.cardLogo}>
        <Image width="50px" height="37px" src={logoIconWhite.src} />
      </figure>
    </div>
  );
};

export default Card;
