import { FriendDetail } from '../../types/friend';
import axiosInstance from './axiosInstance';

export default async function getFriend(id: string | number): Promise<FriendDetail> {
  const response = await axiosInstance.get(`/friends/id`);
  return response.data;
};
