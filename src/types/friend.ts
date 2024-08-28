export interface User {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  available: boolean;
}

export interface Friend extends User {
  status: string;
}

export interface FriendDetail extends User {
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  photos: string[];
  statuses: string[];
}
