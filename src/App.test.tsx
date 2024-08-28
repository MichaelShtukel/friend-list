import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

test('renders learn react link', () => {
  const queryClient = new QueryClient();
  render(
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
  );
  const linkElement = screen.getByText(/Friends/i);
  expect(linkElement).toBeInTheDocument();
});
