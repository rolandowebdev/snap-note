import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container, Box, IconButton, Text, Badge } from '@chakra-ui/react'
import { showFormattedDate } from '@/utils'
import { useNotes } from '@/context'

export const DetailNote = () => {
  const { id } = useParams()
  const { getNoteById } = useNotes()

  const note = getNoteById(id)
  const navigate = useNavigate()

  return (
    <Container maxW='container.sm' minH='100vh'>
      <Box as='nav' pt='2rem' pb='1rem' display='flex' alignItems='center'>
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
        <Text w='full' fontSize='3xl' fontWeight={700} textAlign='center'>
          {note.title}
        </Text>
      </Box>
      <Box as='main' pb={10} pt={5}>
        <Text as='p' lineHeight='1.75rem' textAlign='justify'>
          {note.body}
        </Text>
        <Badge mt={3}>{showFormattedDate(note.createdAt)}</Badge>
      </Box>
    </Container>
  )
}
