export interface Friend {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  status: string;
  available: boolean;
}

export interface FriendDetail extends Friend{
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  photos: string[];
  statuses: string[];
}
