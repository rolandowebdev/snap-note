import { useRef } from 'react'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  useToast
} from '@chakra-ui/react'
import { Plus } from 'lucide-react'

export const AddModal = ({ setTitle, setBody, onAddNote }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleAddNote = () => {
    onAddNote()
    toast({
      title: 'Success add note',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
    onClose()
  }

  return (
    <>
      <IconButton
        h={12}
        w={14}
        variant='ghost'
        aria-label='add note'
        bg='brand.softDark'
        color='gray.500'
        _hover={{ bgColor: 'brand.border' }}
        _active={{ bgColor: 'transparent' }}
        onClick={onOpen}
        icon={<Plus />}
      />

      <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='brand.softDark' color='brand.light'>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl onChange={(e) => setTitle(e.target.value)} isRequired>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' />
            </FormControl>

            <FormControl
              mt={4}
              onChange={(e) => setBody(e.target.value)}
              isRequired>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleAddNote} colorScheme='blue' mr={3}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
