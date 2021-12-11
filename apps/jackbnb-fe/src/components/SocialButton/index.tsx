import React, {FC} from 'react';

import emailIcon from '../../assets/icon/email.svg';
import googleIcon from '../../assets/icon/google.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import appleIcon from '../../assets/icon/apple.svg';

import IconButton from '../IconButton';
import SocialButtonStyles from './index.module.css';

const SOCIALBUTTONS = [
  {title: 'Ingresa por correo electrónico', icon: emailIcon.src},
  {title: 'Continúa con Google', icon: googleIcon.src},
  {title: 'Continúa con Facebook', icon: facebookIcon.src},
  {title: 'Continúa con Apple', icon: appleIcon.src},
];

const SocialButton: FC = () => {
  return (
    <>
      <div className={SocialButtonStyles.socialButtonContainer}>
        <ul className={SocialButtonStyles.buttonList}>
          {SOCIALBUTTONS.map((SOCIALbUTTON) => (
            <li
              key={SOCIALbUTTON.title}
              className={SocialButtonStyles.buttonItem}>
              <IconButton title={SOCIALbUTTON.title} icon={SOCIALbUTTON.icon} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialButton;
