import { Container, Box, VStack } from '@chakra-ui/react'
import { Header, NoteCard } from '../../components/ui'
import { useNotes } from '@/context'

export const Home = () => {
  const { notes } = useNotes()
  return (
    <>
      <Container maxW='container.sm' minH='100vh'>
        <Header />
        <Box as='main' py={10}>
          <VStack as='article' gap={3}>
            {notes.length > 0 ? (
              notes
                .slice(0, 4)
                .map((note) => <NoteCard key={note.id} {...note} />)
            ) : (
              <Text as='p'>Note is empty</Text>
            )}
          </VStack>
        </Box>
      </Container>
    </>
  )
}
