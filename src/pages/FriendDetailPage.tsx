import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFriend } from '../services/queries/useGetFriend';
import OnlineAvatar from '../components/OnlineAvatar/OnlineAvatar';
import InfoCard from '../components/InfoCard/InfoCard';
import PhotoCard from '../components/PhotoCard/PhotoCard';
import UserDetails from '../components/UserDetails/UserDetails';

const FriendDetailPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data: friendDetail, error, isLoading} = useGetFriend(id);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading friend details</Text>;

  if (!friendDetail) return <Text>This user does not exist</Text>;

  return (
    <Box mx="auto">
      <Button onClick={() => navigate('/')} mb={4}>&larr; Back</Button>
      <VStack spacing={4} align="start">
        <OnlineAvatar img={friendDetail.img} available={friendDetail.available} size="2xl" />
        <UserDetails
          first_name={friendDetail.first_name}
          last_name={friendDetail.last_name}
          statuses={friendDetail.statuses}
          fontSize="2xl"
        />

        <Tabs variant="soft-rounded" colorScheme="blue" w="100%">
          <TabList>
            <Tab>Info</Tab>
            {
              !!friendDetail.photos.length && <Tab>Photos</Tab>
            }
          </TabList>

          <TabPanels>
            <TabPanel px="0">
              <InfoCard friendDetail={friendDetail} />
            </TabPanel>

            <TabPanel px="0">
              <PhotoCard photos={friendDetail.photos} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default FriendDetailPage;
