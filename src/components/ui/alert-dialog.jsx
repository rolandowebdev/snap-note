import { useRef } from 'react'
import {
  Button,
  IconButton,
  AlertDialog as ChakraDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure
} from '@chakra-ui/react'
import { Trash } from 'lucide-react'

export const AlertDialog = ({ description, title, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label='delete note'
        color='brand.light'
        variant='ghost'
        _hover={{ color: 'brand.danger' }}
        _active={{ bgColor: 'transparent' }}
        icon={<Trash />}
      />

      <ChakraDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete {title}
            </AlertDialogHeader>

            <AlertDialogBody>{description}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </ChakraDialog>
    </>
  )
}
