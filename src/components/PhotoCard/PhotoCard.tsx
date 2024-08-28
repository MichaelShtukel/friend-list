import { Box, Image, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

interface PhotoCardProps {
  photos: string[];
}

const PhotoCard: FC<PhotoCardProps> = ({photos}) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <SimpleGrid columns={[2, null, 3]} spacing={4}>
        {photos.map((photo, index) => (
          <Box key={photo} borderRadius="lg" overflow="hidden">
            <Image src={photo} alt={`Photo ${index + 1}`} boxSize="100%" objectFit="cover"
                   fallbackSrc="https://via.placeholder.com/150" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PhotoCard;
