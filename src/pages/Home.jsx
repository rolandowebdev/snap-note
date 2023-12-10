import {
  Container,
  Box,
  VStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  IconButton
} from '@chakra-ui/react'
import {
  NoteCard,
  EmptyNotes,
  SearchNotes,
  CustomTabPanel,
  Footer
} from '@/components'
import { Plus } from 'lucide-react'
import { useNotes } from '@/context'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const { unarchivedNotes, archivedNotes } = useNotes()
  return (
    <>
      <Container maxW='container.sm' minH='calc(100vh - 56px)'>
        <Box as='header' py='1rem'>
          <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
            Snap Note
          </Heading>
          <Box as='nav' mt={6} display='flex' gap={3} alignItems='center'>
            <SearchNotes />
            <IconButton
              h={12}
              w={14}
              onClick={() => navigate('/notes/new')}
              variant='ghost'
              aria-label='create note'
              bg='brand.softDark'
              color='#FFFFFFA3'
              _hover={{ bgColor: 'brand.border' }}
              _active={{ bgColor: 'transparent' }}
              icon={<Plus />}
            />
          </Box>
        </Box>
        <Tabs variant='soft-rounded' mt={4} colorScheme='whiteAlpha' isFitted>
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
            <CustomTabPanel>
              <VStack as='article' gap={3}>
                {unarchivedNotes.length > 0 ? (
                  unarchivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <EmptyNotes description='List of unarchived notes is empty' />
                )}
              </VStack>
            </CustomTabPanel>
            <CustomTabPanel>
              <VStack as='article' gap={3}>
                {archivedNotes.length > 0 ? (
                  archivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <EmptyNotes description='List of archived notes is empty' />
                )}
              </VStack>
            </CustomTabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  )
}
