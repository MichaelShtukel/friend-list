import { Friend } from '../../types/friend';
import axiosInstance from './axiosInstance';

export default async function getFriends(): Promise<Friend[]> {
  const response = await axiosInstance.get<Friend[]>('/friends');
  return response.data;
};
