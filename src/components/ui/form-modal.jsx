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
  ModalFooter,
  FormControl,
  FormLabel,
  IconButton,
  Input
} from '@chakra-ui/react'
import { Plus, EditIcon } from 'lucide-react'
import { useNotes } from '@/context'
import { useCustomToast } from '@/hooks'

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
    }

    setTitle('')
    setBody('')
  }

  const handleAddNote = () => {
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
          color='#4a5568'
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
            <FormControl onChange={(e) => setTitle(e.target.value)} isRequired>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' value={title} />
            </FormControl>

            <FormControl
              mt={4}
              onChange={(e) => setBody(e.target.value)}
              isRequired>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description' value={body} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleAddNote} colorScheme='blue' mr={3}>
              {noteId ? 'Update' : 'Create'}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
