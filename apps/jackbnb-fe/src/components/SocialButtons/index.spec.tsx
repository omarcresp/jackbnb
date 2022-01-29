import React from 'react';
import {render, screen} from '@testing-library/react';

import SocialButton from '.';

describe('<SocialButton />', () => {
  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Ingresa por correo electrónico')).toBeVisible();
  });

  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Continua con Google')).toBeVisible();
  });

  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Continua con Facebook')).toBeVisible();
  });

  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Continua con Apple')).toBeVisible();
  });
});
