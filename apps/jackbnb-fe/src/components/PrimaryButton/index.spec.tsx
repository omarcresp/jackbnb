import React from "react";
import PrimaryButton from './index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<PrimaryButton/>', () => {
    test('should mount' , () => {
      render (<PrimaryButton  onClick={jest.fn()}/>);

      expect(screen.getByText('hola')).toBeVisible();
    });
})

test('click the button', () => {
render (<PrimaryButton onClick={jest.fn()}> hola <PrimaryButton/>);

     expect(fireEvent.click(getByText.('hola'));
})
