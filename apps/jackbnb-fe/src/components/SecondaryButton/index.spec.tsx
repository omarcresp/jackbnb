<<<<<<< HEAD
import React from "react"
import {render, fireEvent, screen} from '@testing-library/react';
import FormButton from '.';

//bueno, testeando el secondaryButton voy a hacer lo que me enseño el omar :D
describe ('formButton', () => {
  test('should mount', () => {
    render (<FormButton onClick={jest.fn()}> hola </FormButton>);
=======
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import FormButton from '.';

// bueno, testeando el secondaryButton voy a hacer lo que me enseño el omar :D
describe('formButton', () => {
  test('should mount', () => {
    render(<FormButton onClick={jest.fn()}> hola </FormButton>);
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28

    expect(screen.getByText('hola')).toBeVisible();
  });

  test('Should call the onClick', () => {
    const onClick = jest.fn();

    render(<FormButton onClick={onClick}>Hola</FormButton>);

    fireEvent.click(screen.getByText('Hola'));

    expect(onClick).toBeCalled();
  });

<<<<<<< HEAD

  test('click the button', () => {
    render (<FormButton onClick={jest.fn()}> hola </FormButton>);

      fireEvent.click(screen.getByText('hola'));

      expect(screen.getByText('hola')).toBeVisible();
    })
})
=======
  test('click the button', () => {
    render(<FormButton onClick={jest.fn()}> hola </FormButton>);

    fireEvent.click(screen.getByText('hola'));

    expect(screen.getByText('hola')).toBeVisible();
  });
});
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
