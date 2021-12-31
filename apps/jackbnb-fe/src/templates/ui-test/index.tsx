import React from 'react';
import type {NextPage} from 'next';

import MyTestButton from '../../components/MyTestButton';
import SocialButtons from '../../components/SocialButtons';

const UiTestPage: NextPage = () => {
  return (
    <>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>

      <SocialButtons />
    </>
  );
};

export default UiTestPage;
