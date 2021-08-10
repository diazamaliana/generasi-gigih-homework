import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from "./redux";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('renders login page', () => {
  render(
    <Provider store={store}>
       <App />
    </Provider>
  );
  const title = screen.getByText(/Listening is everything/i);
  expect(title).toBeVisible();

  const subtitle = screen.getByText(/Millions of songs and podcasts/i)
  expect (subtitle).toBeVisible();

  const loginButton = screen.getByText(/log in/i)
  expect(loginButton).toBeInTheDocument();
});
