//bueno, primero lo primero, tengo que testear el card como prueba de que puedo sola :'v
//voy a verificar que se renderice el componente por que no hay mucho mas que testear la verdad.
import React from 'react';
import {render, screen} from '@testing-library/react';
import Card from '.';

describe ('<Card />', () => {
  test('should mount', () =>{
    render( <Card/> )

    expect(screen.getByText('El trabajo')).toBeInTheDocument();
  })
})



