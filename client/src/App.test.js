import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {MovieList} from './MovieList';

test('renders home link', () => {
  const { getByText } = render(<MovieList />);
  const linkElement = getByText(/What to watch/);
  expect(linkElement).toBeInTheDocument();
});

