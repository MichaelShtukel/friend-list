import { FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: FC<PropsWithChildren<CustomModalProps>> = ({
                                                                isOpen,
                                                                onClose,
                                                                children,
                                                              }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton bg="white" />
        <ModalBody p="0">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
