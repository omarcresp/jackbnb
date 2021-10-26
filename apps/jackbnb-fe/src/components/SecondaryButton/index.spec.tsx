import React from react
import {render, fireEvent} from '@testing-library/jest-dom/extend-expect';


import FormButton from '.';
import { Button } from '@chakra-ui/button';

//renderiza
test('renderizado', () => {
    const ButtonForm = {
      content: 'esto es un test de renderizado',
      important: true
    }
    const component = render(<ButtonForm button={Button} />)
  
    component.getByText('esto es un boton')
    component.getByText('make important')
  })


//evento onClick

test('testeando evento onclick', ()=>{
    const buttonProp = {
      content: 'esto es un test',
      important: true
    }
  
    const mockHandler = jest.fn()
  
    const component = render(<FormbuttonProp buttonProp={buttonProp} buttonProp={mockHandler} />)
  
    const button = component.getByText('esto es un boton')
    fireEvent.click(button)
  })




