import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FriendListPage from './FriendListPage';
import { useGetFriends } from '../services/queries/useGetFriends';

jest.mock('../services/queries/useGetFriends');

const mockUseGetFriends = useGetFriends as jest.Mock;

const queryClient = new QueryClient();

describe('FriendListPage', () => {
  beforeEach(() => {
    mockUseGetFriends.mockReset();
  });

  it('friend list success loading', async () => {
    mockUseGetFriends.mockReturnValue({
      data: [
        {
          "id": 1,
          "img": "https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg",
          "first_name": "Jeremy",
          "last_name": "Davis",
          "status": "At work...",
          "available": false
        },
        {
          "id": 2,
          "img": "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
          "first_name": "Vlad",
          "last_name": "Baratovich",
          "status": "Hangout out by the pool",
          "available": true
        },
      ],
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendListPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Jeremy')).toBeInTheDocument();
    expect(screen.getByText('Vlad')).toBeInTheDocument();
  });

  it('friend list is loading', () => {
    mockUseGetFriends.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendListPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('friend list error loading', () => {
    mockUseGetFriends.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendListPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
