import React from 'react';
import {render, screen} from '@testing-library/react';

import UiTestPage from '.'

describe('<UiTestPage>', () => {
  test('Should mount', () => {
    render(<UiTestPage />)

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
})
