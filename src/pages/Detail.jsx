import parse from 'html-react-parser'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  IconButton,
  Text,
  Badge,
  Image
} from '@chakra-ui/react'
import { NotFound } from './NotFound'
import { showFormattedDate } from '@/utils'
import { useNotes } from '@/context'
import { Footer } from '@/components'

export const DetailNote = () => {
  const { id } = useParams()
  const { getNoteById } = useNotes()

  const note = getNoteById(id)
  const navigate = useNavigate()

  return (
    <>
      <Container maxW='container.sm' minH='calc(100vh - 53px)'>
        {note ? (
          <>
            <Box
              as='nav'
              pt='2rem'
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
              <Text w='full' fontSize='3xl' fontWeight={700} textAlign='center'>
                {note?.title}
              </Text>
            </Box>
            <Box as='main' pb={10} pt={5}>
              <Image
                w='full'
                rounded='md'
                mb={2}
                h='250px'
                objectFit='cover'
                src='public/example.jpg'
                alt='example image'
              />
              <Text as='p' lineHeight='1.75rem' textAlign='justify'>
                {parse(note?.body)}
              </Text>
              <Badge mt={3}>{showFormattedDate(note?.createdAt)}</Badge>
            </Box>
          </>
        ) : (
          <NotFound />
        )}
      </Container>
      <Footer />
    </>
  )
}
