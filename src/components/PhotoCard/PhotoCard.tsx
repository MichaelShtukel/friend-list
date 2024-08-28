import { FC, useState } from 'react';
import { Box, Image, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import CustomModal from '../CustomModal/CustomModal';

interface PhotoCardProps {
  photos: string[];
}

const PhotoCard: FC<PhotoCardProps> = ({photos}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleImageClick = (photo: string) => {
    setSelectedPhoto(photo);
    onOpen();
  };

  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <SimpleGrid columns={[2, null, 3]} spacing={4}>
          {photos.map((photo, index) => (
            <Box key={photo} borderRadius="lg" overflow="hidden" onClick={() => handleImageClick(photo)}
                 cursor="pointer">
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                boxSize="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <CustomModal isOpen={isOpen} onClose={onClose}>
        {selectedPhoto && (
          <Image src={selectedPhoto} alt="Selected photo" boxSize="100%" objectFit="cover"
                 fallbackSrc="https://via.placeholder.com/150" />
        )}
      </CustomModal>
    </>
  );
};

export default PhotoCard;
