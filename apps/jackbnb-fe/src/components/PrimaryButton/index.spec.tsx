<<<<<<< HEAD
import React from "react";
import PrimaryButton from './index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<PrimaryButton/>', () => {
    test('should mount' , () => {
      render (<PrimaryButton  onClick={jest.fn()}> hola </PrimaryButton>);

      expect(screen.getByText('Continuar')).toBeVisible();
    });

    test('Should call the onClick', () => {
      const onClick = jest.fn();

      render(<PrimaryButton onClick={onClick}/>);

      fireEvent.click(screen.getByText('Continuar'));

      expect(onClick).toBeCalled();
    });

})


=======
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import PrimaryButton from './index';

describe('<PrimaryButton/>', () => {
  test('should mount', () => {
    render(<PrimaryButton onClick={jest.fn()}>hola</PrimaryButton>);

    expect(screen.getByText('hola')).toBeVisible();
  });

  test('Should call the onClick', () => {
    const onClick = jest.fn();

    render(<PrimaryButton onClick={onClick}>Hola</PrimaryButton>);

    fireEvent.click(screen.getByText('Hola'));

    expect(onClick).toBeCalled();
  });
});
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
