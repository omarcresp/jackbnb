import React, {FC} from 'react';

import MyTestButtonStyles from './index.module.css';

const Form: FC = () => {
  return (
    <div className={MyTestButtonStyles.container}>
      <input
        type="name"
        placeholder="Name"
        className={MyTestButtonStyles.form}
      />

      <input
        type="email"
        placeholder="Email"
        className={MyTestButtonStyles.form}
      />

      <input
        type="text"
        placeholder="Message"
        className={MyTestButtonStyles.form}
      />
    </div>
  );
};

export default Form;
