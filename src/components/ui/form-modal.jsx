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
import { Plus, EditIcon } from 'lucide-react'
import { useCustomToast } from '@/hooks'
import { useNotes } from '@/context'

export const FormModal = ({ noteId }) => {
  const { showToast } = useCustomToast()
  const { addNote, editNote, getNoteById } = useNotes()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialNote = getNoteById(noteId)

  const [title, setTitle] = useState(initialNote?.title || '')
  const [body, setBody] = useState(initialNote?.body || '')

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const addAndResetNote = () => {
    if (noteId) {
      editNote(noteId, title, body)
    } else {
      addNote(title, body)
      setTitle('')
      setBody('')
    }
  }

  const handleAddNote = (e) => {
    e.preventDefault()

    if (!title || !body) {
      return showToast('error', 'Title and body cannot be empty')
    }

    addAndResetNote()
    showToast('success', `Note ${noteId ? 'updated' : 'added'} successfully`)
    onClose()
  }

  return (
    <>
      {noteId ? (
        <IconButton
          onClick={onOpen}
          aria-label='update note'
          color='brand.light'
          variant='ghost'
          _hover={{ color: 'brand.success' }}
          _active={{ bgColor: 'transparent' }}
          icon={<EditIcon />}
        />
      ) : (
        <IconButton
          h={12}
          w={14}
          onClick={onOpen}
          variant='ghost'
          aria-label='create note'
          bg='brand.softDark'
          color='#FFFFFFA3'
          _hover={{ bgColor: 'brand.border' }}
          _active={{ bgColor: 'transparent' }}
          icon={<Plus />}
        />
      )}

      <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='brand.softDark' color='brand.light'>
          <ModalHeader>{noteId ? 'Update' : 'Create'} Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleAddNote}>
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
                {noteId ? 'Update' : 'Create'}
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

FormModal.propTypes = {
  noteId: PropTypes.string
}
