import React, {FC} from 'react';

import emailIcon from '../../assets/icon/email.svg';
import googleIcon from '../../assets/icon/google.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import appleIcon from '../../assets/icon/apple.svg';

import IconButton from '../IconButton';
import SocialButtonStyles from './index.module.css';

const SOCIAL_BUTTONS = [
  {title: 'Ingresa por correo electrónico', icon: emailIcon.src},
  {title: 'Continua con Google', icon: googleIcon.src},
  {title: 'Continua con Facebook', icon: facebookIcon.src},
  {title: 'Continua con Apple', icon: appleIcon.src},
];

const SocialButtons: FC = () => {
  return (
    <>
      <div className={SocialButtonStyles.socialButtonContainer}>
        <ul className={SocialButtonStyles.buttonList}>
          {SOCIAL_BUTTONS.map((socialButton) => (
            <li
              key={socialButton.title}
              className={SocialButtonStyles.buttonItem}>
              <IconButton icon={socialButton.icon}>
                {socialButton.title}
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialButtons;
