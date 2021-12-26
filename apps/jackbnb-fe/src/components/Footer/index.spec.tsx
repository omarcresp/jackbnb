//comprobacion de renderizado del footer
import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from '.';

describe('<Footer/>', () =>{
  test('should mount', () =>{
    render( <Footer/>)

    expect(screen.getByText('Colaboradores')).toBeInTheDocument();
  })
})
