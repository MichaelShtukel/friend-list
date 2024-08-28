import { FC } from 'react';
import { Badge } from '@chakra-ui/react';

interface StatusBadgeProps {
  status?: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({status}) => {
  return (
    <Badge variant='outline' borderRadius="10" px="2">{status}</Badge>
  );
};

export default StatusBadge;
