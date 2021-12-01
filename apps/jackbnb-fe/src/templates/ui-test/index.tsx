import React from 'react';
import type {NextPage} from 'next';

import MyTestButton from '../../components/MyTestButton';

const UiTestPage: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>
    </div>
  );
};

export default UiTestPage;
