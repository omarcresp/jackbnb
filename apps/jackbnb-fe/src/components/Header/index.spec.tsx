import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from './index';


test('renders content' , () => {
  const Header = {
    content: 'esto es un test :D'
  }

  const component = render(Header)
  console.log(Header)
})
