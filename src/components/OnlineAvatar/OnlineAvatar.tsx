import { FC } from 'react';
import { Avatar, AvatarBadge } from '@chakra-ui/react'

interface OnlineAvatarProps {
  img: string
  available: boolean
  size?: string
}

const OnlineAvatar: FC<OnlineAvatarProps> = ({img, available, size = "md"}) => {
  return (
    <Avatar src={img} mr={4} size={size} borderRadius="0.1em">
      {available && <AvatarBadge boxSize='1em' bg='green.500' borderWidth="0.1em" />}
    </Avatar>
  );
};

export default OnlineAvatar;
