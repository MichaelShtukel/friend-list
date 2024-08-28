import { FC } from 'react';
import { Badge, Stack, Text } from '@chakra-ui/react';

interface UserDetailsProps {
  first_name: string;
  last_name: string;
  status?: string;
  statuses?: string[];
  fontSize?: string;
}

const UserDetails: FC<UserDetailsProps> = ({
                                             first_name,
                                             last_name,
                                             status,
                                             statuses,
                                             fontSize,
                                           }) => {
  return (
    <>
      <Text fontSize={fontSize} fontWeight="bold">{first_name} {last_name}</Text>
      {
        !!status && <Badge variant='outline'>{status}</Badge>
      }
      {
        !!statuses?.length && (
          <Stack direction='row' wrap="wrap">
            {
              statuses.map(status => <Badge key={status} variant='outline'>{status}</Badge>)
            }
          </Stack>
        )
      }
    </>
  );
};

export default UserDetails;
