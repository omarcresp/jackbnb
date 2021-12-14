import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import MyTestButton from '.';

/**
 * Testing library funciona como un navegador
 * al hacer render(<MiComponente />) añades
 * Mi componente a ese navegador
 *
 * La idea es a traves de fireEvent simular
 * acciones que las personas harian con
 * nuestro componente y despues comprobar
 * que esas acciones se comportan como deberian
 */

// Describe agrupa una serie de tests
describe('<MyTestButton />', () => {
  // test('nombre del test', () => { contenido del test })
  test('Should mount', () => {
    render(<MyTestButton onClick={jest.fn()}>Hola</MyTestButton>);

    expect(screen.getByText('Hola')).toBeVisible();
  });

  // En caso de que no hayan textos para hacer un toBeVisible
  test('Should mount', () => {
    const {container} = render(
      <MyTestButton onClick={jest.fn()}>Hola</MyTestButton>,
    );

    expect(container).toBeDefined();
  });

  test('Should call the onClick', () => {
    const onClick = jest.fn();

    render(<MyTestButton onClick={onClick}>Hola</MyTestButton>);

    fireEvent.click(screen.getByText('Hola'));

    expect(onClick).toBeCalled();
  });

  test('Should click the button', () => {
    render(<MyTestButton onClick={jest.fn()}>Hola</MyTestButton>);

    fireEvent.click(screen.getByText('Hola'));

    expect(screen.getByText('hidden message')).toBeVisible();
  });
});
