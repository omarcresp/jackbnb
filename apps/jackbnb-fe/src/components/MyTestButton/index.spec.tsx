import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

// Importar el componente a testear
import MyTestButton from '.';

describe('<MyTestButton>', () => {
  test('Should mount', () => {
    render(<MyTestButton>jest</MyTestButton>);

    expect(screen.getByText('jest')).toBeVisible();
  });

  test('Should click and show message', () => {
    // renderizar el componente
    render(<MyTestButton>jest</MyTestButton>);

    // Interactuar con el componente
    fireEvent.click(screen.getByText('jest'));

    // Validar que las cosas que hayan cambiado por la interaccion
    // Hayan cambiado correctamente
    expect(screen.getByText('hidden message')).toBeVisible();
  });
});
