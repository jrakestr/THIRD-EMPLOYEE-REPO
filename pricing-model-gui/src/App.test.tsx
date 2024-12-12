import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expense table', () => {
    render(<App />);
    const administrativeExpenses = screen.getByText(/administrative expenses/i);
    expect(administrativeExpenses).toBeInTheDocument();
});
