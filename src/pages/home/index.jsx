import { Container, Box, VStack } from '@chakra-ui/react'
import { Header, NoteCard } from '../../components/ui'
import { useNotes } from '@/context'

export const Home = () => {
  const { notes } = useNotes()
  return (
    <>
      <Container maxW='container.md' minH='100vh'>
        <Header />
        <Box as='main' py={10}>
          <VStack as='article' gap={3}>
            {notes.slice(0, 3).map((note) => (
              <NoteCard key={note.id} {...note} />
            ))}
          </VStack>
        </Box>
      </Container>
    </>
  )
}
