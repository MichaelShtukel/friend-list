import { useNavigate } from 'react-router-dom'
import { useGetFriends } from '../services/queries/useGetFriends';
import { Button, Text, VStack } from '@chakra-ui/react'
import FriendListItem from '../components/FriendListItem/FriendListItem';

const FriendListPage = () => {
  const navigate = useNavigate()

  const {data: friends, error, isLoading} = useGetFriends()

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading friends</Text>;

  return (
    <VStack spacing={4}>
      <Text fontSize="xxx-large" color="gray.500">Friends</Text>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend}>
          <Button colorScheme="blue" onClick={() => navigate(`/friends/${friend.id}`)}>Details</Button>
        </FriendListItem>
      ))}
    </VStack>
  );
};

export default FriendListPage;
