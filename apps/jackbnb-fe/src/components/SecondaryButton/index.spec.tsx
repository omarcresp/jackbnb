import React from "react"
import {render, fireEvent, screen} from '@testing-library/react';
import FormButton from '.';

//bueno, testeando el secondaryButton voy a hacer lo que me enseño el omar :D
describe ('formButton', () => {
  test('should mount', () => {
    render (<FormButton onClick={jest.fn()}/>);

    expect(screen.getByText('moco')).toBeVisible();
  });
})

test('click the button', () => {
  render (<FormButton onClick={jest.fn()}> hola <FormButton/>);

       expect(fireEvent.click(getByText.('moco'));
  })
