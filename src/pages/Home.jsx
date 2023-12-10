import {
  Container,
  Box,
  VStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import { useNotes } from '@/context'
import { NoteCard, FormModal, EmptyNotes, SearchNotes } from '@/components'

export const Home = () => {
  const { unarchivedNotes, archivedNotes } = useNotes()
  return (
    <>
      <Container maxW='container.sm' minH='100vh'>
        <Box as='header' py='1rem'>
          <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
            Snap Note
          </Heading>
          <Box as='nav' mt={6} display='flex' gap={3} alignItems='center'>
            <SearchNotes />
            <FormModal />
          </Box>
        </Box>
        <Tabs variant='soft-rounded' my={2} colorScheme='whiteAlpha'>
          <TabList>
            <Tab
              rounded='md'
              color='#FFFFFFA3'
              _focus={{ bg: 'brand.softDark', color: 'brand.light' }}>
              Unarchived
            </Tab>
            <Tab
              rounded='md'
              color='#FFFFFFA3'
              _focus={{ bg: 'brand.softDark', color: 'brand.light' }}>
              Archived
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              as='main'
              padding={0}
              mt={4}
              maxH='400px'
              overflowY='auto'
              css={{
                '&::-webkit-scrollbar': {
                  width: '5px'
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#FFFFFFA3',
                  borderRadius: '24px'
                }
              }}>
              <VStack as='article' gap={3}>
                {unarchivedNotes.length > 0 ? (
                  unarchivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <EmptyNotes description='List of unarchived notes is empty' />
                )}
              </VStack>
            </TabPanel>
            <TabPanel
              as='main'
              padding={0}
              mt={4}
              maxH='400px'
              overflowY='auto'
              css={{
                '&::-webkit-scrollbar': {
                  width: '5px'
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#FFFFFFA3',
                  borderRadius: '24px'
                }
              }}>
              <VStack as='article' gap={3}>
                {archivedNotes.length > 0 ? (
                  archivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <EmptyNotes description='List of archived notes is empty' />
                )}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  )
}
