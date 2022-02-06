<<<<<<< HEAD
//bueno, primero lo primero, tengo que testear el card como prueba de que puedo sola :'v
//voy a verificar que se renderice el componente por que no hay mucho mas que testear la verdad.
=======
// bueno, primero lo primero, tengo que testear el card como prueba de que puedo sola :'v
// voy a verificar que se renderice el componente por que no hay mucho mas que testear la verdad.
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
import React from 'react';
import {render, screen} from '@testing-library/react';
import Card from '.';

<<<<<<< HEAD
describe ('<Card />', () => {
  test('should mount', () =>{
    render( <Card/> )

    expect(screen.getByText('El trabajo')).toBeInTheDocument();
  })
})



=======
describe('<Card />', () => {
  test('should mount', () => {
    render(<Card />);

    expect(screen.getByText('El trabajo')).toBeInTheDocument();
  });
});
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
