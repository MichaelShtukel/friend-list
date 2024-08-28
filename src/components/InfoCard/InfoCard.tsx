import { Box, HStack, Text } from '@chakra-ui/react';
import { FriendDetail } from '../../types/friend';
import { FC } from 'react';

interface InfoCardProps {
  friendDetail: FriendDetail
}

const InfoCard: FC<InfoCardProps> = ({friendDetail}) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Text fontSize="md" color="gray.500">Bio:</Text>
      <Text mb={4}>{friendDetail.bio}</Text>
      <HStack mt={2} justifyContent="space-between">
        <Text fontSize="md" color="gray.500">Phone:</Text>
        <Text>{friendDetail.phone}</Text>
      </HStack>
      <HStack mt={2} justifyContent="space-between">
        <Text fontSize="md" color="gray.500">Address:</Text>
        <Text>{friendDetail.address_1}</Text>
      </HStack>
      <HStack mt={2} justifyContent="space-between">
        <Text fontSize="md" color="gray.500">City:</Text>
        <Text>{friendDetail.city}</Text>
      </HStack>
      <HStack mt={2} justifyContent="space-between">
        <Text fontSize="md" color="gray.500">State:</Text>
        <Text>{friendDetail.state}</Text>
      </HStack>
      <HStack mt={2} justifyContent="space-between">
        <Text fontSize="md" color="gray.500">Zipcode:</Text>
        <Text>{friendDetail.zipcode}</Text>
      </HStack>
    </Box>
  );
};

export default InfoCard;
