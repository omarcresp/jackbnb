import React from "react";
import PrimaryButton from './index';
import { fireEvent, render } from '@testing-library/jest-dom/extend-expect';


//test renderizado
test('renderizado', () => {
  const Button = {
    content: 'esto es un test de renderizado',
    important: true
  }
  const component = render(<Button button={button} />)

  component.getByText('esto es un boton')
  component.getByText('make important')
})

//test evento onclick
test('testeando evento onclick', ()=>{
  const buttonProp = {
    content: 'esto es un test',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(<buttonProp buttonProp={buttonProp} buttonProp={mockHandler} />)

  const button = component.getByText('esto es un boton')
  fireEvent.click(button)
})
