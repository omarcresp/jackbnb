import React from 'react';
import type {NextPage} from 'next';

import MyTestButton from '../../components/MyTestButton';
import SocialButton from '../../components/SocialButton';

const UiTestPage: NextPage = () => {
  return (
    <>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>

      <SocialButton />
    </>
  );
};

export default UiTestPage;
