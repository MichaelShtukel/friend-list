import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFriend } from '../services/queries/useGetFriend';

const FriendDetail = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data, error, isLoading} = useGetFriend(id);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading friend details</Text>;

  if (!data) return <Text>This user does not exist</Text>;

  return (
    <Box p={6} w="80%" mx="auto">
      <Button onClick={() => navigate('/')} mb={4}>&larr; Back</Button>
      <VStack spacing={4} align="start">
        <Avatar size="2xl" src={data.img} />
        <Text fontSize="2xl" fontWeight="bold">{data.first_name} {data.last_name}</Text>
        <Badge colorScheme="green">{data.status}</Badge>

        <Tabs variant="soft-rounded" colorScheme="blue" w="100%">
          <TabList>
            <Tab>Info</Tab>
            <Tab>Photos</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Text fontSize="md" color="gray.500" mb={2}>Bio:</Text>
                <Text mb={4}>{data.bio}</Text>
                <HStack>
                  <Text fontSize="md" color="gray.500">Phone:</Text>
                  <Text>{data.phone}</Text>
                </HStack>
                <HStack mt={2}>
                  <Text fontSize="md" color="gray.500">Address:</Text>
                  <Text>{data.address_1}</Text>
                </HStack>
                <HStack mt={2}>
                  <Text fontSize="md" color="gray.500">City:</Text>
                  <Text>{data.city}</Text>
                </HStack>
                <HStack mt={2}>
                  <Text fontSize="md" color="gray.500">State:</Text>
                  <Text>{data.state}</Text>
                </HStack>
                <HStack mt={2}>
                  <Text fontSize="md" color="gray.500">Zipcode:</Text>
                  <Text>{data.zipcode}</Text>
                </HStack>
              </Box>
            </TabPanel>

            <TabPanel>
              <VStack spacing={4}>
                {data.photos.map((photo, index) => (
                  <Box key={index}>
                    <img src={photo} alt={`Photo ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                  </Box>
                ))}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default FriendDetail;
