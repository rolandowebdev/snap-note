import PropTypes from 'prop-types'
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
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { Trash } from 'lucide-react'

export const AlertDialog = ({ description, title, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const toast = useToast()

  const handleDelete = () => {
    onDelete()
    toast({
      title: 'Success delete note',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
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
          <AlertDialogContent bg='brand.softDark' color='brand.light'>
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

AlertDialog.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}
