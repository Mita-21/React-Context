import { render, screen } from '@testing-library/react';
import App from './App';
//testeo app
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Context API/i);
  expect(linkElement).toBeInTheDocument();
});
