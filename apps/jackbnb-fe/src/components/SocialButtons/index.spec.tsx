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
    expect(screen.getByText('Continúa con Google')).toBeVisible();
  });

  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Continúa con Facebook')).toBeVisible();
  });

  test('Should mount', () => {
    render(<SocialButton />);
    expect(screen.getByText('Continúa con Apple')).toBeVisible();
  });
});
