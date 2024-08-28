import { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import StatusBadge from '../StatusBadge/StatusBadge';

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
        !!status && <StatusBadge status={status} />
      }
      {
        !!statuses?.length && (
          <Stack direction='row' wrap="wrap">
            {
              statuses.map(status => <StatusBadge key={status} status={status} />)
            }
          </Stack>
        )
      }
    </>
  );
};

export default UserDetails;
