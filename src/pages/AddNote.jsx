import { useState, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  IconButton
} from '@chakra-ui/react'
import { useCustomToast } from '@/hooks/useCustomToast'
import { useNotes } from '@/context'
import { Footer } from '@/components'
import { useNavigate } from 'react-router-dom'

export const AddNote = () => {
  const navigate = useNavigate()
  const { showToast } = useCustomToast()
  const { addNote } = useNotes()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const initialRef = useRef(null)

  const addAndResetNote = () => {
    addNote(title, body)
    setTitle('')
    setBody('')
  }

  const handleAddNote = (e) => {
    e.preventDefault()

    if (!title || !body) {
      return showToast('error', 'Title and body cannot be empty')
    }

    addAndResetNote()
    showToast('success', 'Note added successfully')
    navigate('/')
  }

  return (
    <>
      <Container maxW='container.sm' minH='calc(100vh - 56px)'>
        <Box
          as='nav'
          pt='2rem'
          mb={6}
          pb='1rem'
          display='flex'
          alignItems='center'>
          <IconButton
            variant='ghost'
            aria-label='back to home'
            color='brand.light'
            onClick={() => navigate('/')}
            bg='brand.softDark'
            _hover={{ bg: 'brand.border' }}
            _active={{ bgColor: 'brand.border' }}
            icon={<ArrowLeft />}
          />
          <Text
            w='full'
            fontSize='3xl'
            fontWeight={700}
            textAlign='center'
            marginLeft='-40px'>
            Add Note
          </Text>
        </Box>
        <Box as='main'>
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
              Create
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
