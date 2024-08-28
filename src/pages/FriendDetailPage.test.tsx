import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FriendDetailPage from './FriendDetailPage';
import { useGetFriend } from '../services/queries/useGetFriend';

jest.mock('../services/queries/useGetFriend');

const mockUseGetFriend = useGetFriend as jest.Mock;

const queryClient = new QueryClient();

const mockData = {
  "id": 6,
  "img": "https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg",
  "first_name": "Steph",
  "last_name": "Walters",
  "phone": "(820) 289-1818",
  "address_1": "5190 Center Court Drive",
  "city": "Spring",
  "state": "TX",
  "zipcode": "77370",
  "bio": "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
  "photos": [
    "https://flic.kr/p/mxHVJu",
    "https://flic.kr/p/nCJyXN",
    "https://flic.kr/p/mxwwsv"
  ],
  "statuses": [
    "Developing something amazing",
    "This could be interesting....",
    "Man, life is so good",
    "There is nothing quite like a good friend",
    "Take a look around you, everything is awesome",
    "What is the point of all of this"
  ],
  "available": true
}

describe('FriendDetailPage', () => {
  beforeEach(() => {
    mockUseGetFriend.mockReset();
  });

  it('friend detail success loading', async () => {
    mockUseGetFriend.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendDetailPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText('Steph')).toBeInTheDocument();
    expect(screen.getByText('Walters')).toBeInTheDocument();
  });

  it('friend detail is loading', () => {
    mockUseGetFriend.mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendDetailPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('friend detail error loading', () => {
    mockUseGetFriend.mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <FriendDetailPage />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
