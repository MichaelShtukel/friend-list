import { useQuery } from '@tanstack/react-query';
import { Friend } from '../../types/friend';
import getFriends from '../api/getFriends';

export const useGetFriends = () => {
  return useQuery<Friend[]>({
    queryKey: ['friends'],
    queryFn: getFriends,
    initialData: [],
  });
}
