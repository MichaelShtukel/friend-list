import { FC, PropsWithChildren } from 'react';
import { Friend } from '../../types/friend';
import { Box } from '@chakra-ui/react'
import OnlineAvatar from '../OnlineAvatar/OnlineAvatar';
import UserDetails from '../UserDetails/UserDetails';

interface FriendListItemProps {
  friend: Friend
}

const FriendListItem: FC<PropsWithChildren<FriendListItemProps>> = ({friend, children}) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" w="100%" display="flex" alignItems="center">
      <OnlineAvatar img={friend.img} available={friend.available} />
      <Box flex="1">
        <UserDetails
          first_name={friend.first_name}
          last_name={friend.last_name}
          status={friend.status}
        />
      </Box>
      {children}
    </Box>
  );
};

export default FriendListItem;
