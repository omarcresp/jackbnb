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


