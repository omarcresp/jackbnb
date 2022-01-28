import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import FormButton from '.';

// bueno, testeando el secondaryButton voy a hacer lo que me enseño el omar :D
describe('formButton', () => {
  test('should mount', () => {
    render(<FormButton onClick={jest.fn()}> hola </FormButton>);

    expect(screen.getByText('hola')).toBeVisible();
  });

  test('Should call the onClick', () => {
    const onClick = jest.fn();

    render(<FormButton onClick={onClick}>Hola</FormButton>);

    fireEvent.click(screen.getByText('Hola'));

    expect(onClick).toBeCalled();
  });

  test('click the button', () => {
    render(<FormButton onClick={jest.fn()}> hola </FormButton>);

    fireEvent.click(screen.getByText('hola'));

    expect(screen.getByText('hola')).toBeVisible();
  });
});
