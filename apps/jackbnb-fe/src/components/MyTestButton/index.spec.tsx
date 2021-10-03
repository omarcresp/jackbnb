import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import MyTestButton from '.'

describe('<MyTestButton>', () => {
  test('Should mount', () => {
    render(<MyTestButton>jest</MyTestButton>)

    expect(screen.getByText('jest')).toBeInTheDocument();
  });

  test('Should click and show message', () => {
    render(<MyTestButton>jest</MyTestButton>)

    fireEvent.click(screen.getByText('jest'));
    expect(screen.getByText('hidden message')).toBeInTheDocument();
  });
})
