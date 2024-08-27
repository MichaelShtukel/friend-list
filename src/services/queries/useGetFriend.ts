import { useQuery } from '@tanstack/react-query';
import { FriendDetail } from '../../types/friend';
import getFriend from '../api/getFriend';

export const useGetFriend = (id?: string | number) => {
  return useQuery<FriendDetail>({
    queryKey: [id],
    queryFn: () => getFriend(id!),
    enabled: id !== undefined,
  });
}
