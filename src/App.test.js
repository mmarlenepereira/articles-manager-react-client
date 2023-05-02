import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Articles List on the homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/articles/i);
  expect(linkElement).toBeInTheDocument();
});
