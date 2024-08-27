import { useNavigate } from 'react-router-dom'
import { useGetFriends } from '../services/queries/useGetFriends';
import { Avatar, Box, Button, Text, VStack } from '@chakra-ui/react'

const FriendList = () => {
  const navigate = useNavigate()

  const {data, error, isLoading} = useGetFriends()

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading friends</Text>;

  return (
    <VStack spacing={4}>
      {data.map((friend) => (
        <Box key={friend.id} p={5} shadow="md" borderWidth="1px" w="100%" display="flex" alignItems="center">
          <Avatar src={friend.img} mr={4} />
          <Box flex="1">
            <Text fontWeight="bold">{friend.first_name}</Text>
            <Text>{friend.status}</Text>
          </Box>
          <Button colorScheme="blue" onClick={() => navigate(`/friends/${friend.id}`)}>Details</Button>
        </Box>
      ))}
    </VStack>
  );
};

export default FriendList;
