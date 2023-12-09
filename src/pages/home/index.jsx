import { Frown } from 'lucide-react'
import { Container, Box, VStack, Text, Heading } from '@chakra-ui/react'
import { NoteCard } from '@/components/ui'
import { useNotes } from '@/context'

export const Home = () => {
  const { notes } = useNotes()

  return (
    <>
      <Container maxW='container.sm' minH='100vh'>
        <Box as='header' py='24px'>
          <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
            Snap Note
          </Heading>
        </Box>
        <Box as='main' py={10}>
          <VStack as='article' gap={3}>
            {notes.length > 0 ? (
              notes
                .slice(0, 4)
                .map((note) => <NoteCard key={note.id} {...note} />)
            ) : (
              <Box display='flex' alignItems='center' gap={2}>
                <Frown size={32} />
                <Text as='h2' fontSize='3xl' fontWeight={500}>
                  Note is empty
                </Text>
              </Box>
            )}
          </VStack>
        </Box>
      </Container>
    </>
  )
}
