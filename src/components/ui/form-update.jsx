import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Textarea
} from '@chakra-ui/react'
import { EditIcon } from 'lucide-react'
import { useCustomToast } from '@/hooks/useCustomToast'
import { useNotes } from '@/context'

export const FormUpdate = ({ noteId }) => {
  const { showToast } = useCustomToast()
  const { editNote, getNoteById } = useNotes()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialNote = getNoteById(noteId)

  const [title, setTitle] = useState(initialNote?.title || '')
  const [body, setBody] = useState(initialNote?.body || '')

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const UpdateAndResetNote = () => {
    editNote(noteId, title, body)
  }

  const handleUpdateNote = (e) => {
    e.preventDefault()

    if (!title || !body) {
      return showToast('error', 'Title and body cannot be empty')
    }

    UpdateAndResetNote()
    showToast('success', 'Note updated successfully')
    onClose()
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label='update note'
        color='brand.light'
        variant='ghost'
        _hover={{ color: 'brand.success' }}
        _active={{ bgColor: 'transparent' }}
        icon={<EditIcon />}
      />

      <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='brand.softDark' color='brand.light'>
          <ModalHeader>Update Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleUpdateNote}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  maxLength={20}
                  ref={initialRef}
                  placeholder='Title'
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder='Description'
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                />
              </FormControl>

              <Button mt={4} w='full' type='submit' colorScheme='blue' mr={3}>
                Update
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

FormUpdate.propTypes = {
  noteId: PropTypes.string
}
