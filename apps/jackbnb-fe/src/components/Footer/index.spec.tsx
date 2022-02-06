<<<<<<< HEAD
//comprobacion de renderizado del footer
=======
// comprobacion de renderizado del footer
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from '.';

<<<<<<< HEAD
describe('<Footer/>', () =>{
  test('should mount', () =>{
    render( <Footer/>)

    expect(screen.getByText('Colaboradores')).toBeInTheDocument();
  })
})
=======
describe('<Footer/>', () => {
  test('should mount', () => {
    render(<Footer />);

    expect(screen.getByText('Colaboradores')).toBeInTheDocument();
  });
});
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
