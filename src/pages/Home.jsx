import { useNavigate } from 'react-router-dom'
import { Bird, Search } from 'lucide-react'
import {
  Container,
  Box,
  VStack,
  Text,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import { NoteCard, AddModal } from '@/components'
import { useNotes } from '@/context'

export const Home = () => {
  const navigate = useNavigate()
  const { unarchivedNotes, archivedNotes, onKeywordChange, keyword } =
    useNotes()

  const handleSearch = (e) => {
    const searchKeyword = e.target.value

    if (!searchKeyword) {
      onKeywordChange('')
      navigate('/')
      return
    }

    onKeywordChange(searchKeyword)
  }

  return (
    <>
      <Container maxW='container.sm' minH='100vh'>
        <Box as='header' py='1rem'>
          <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
            Snap Note
          </Heading>
          <Box as='nav' mt={6} display='flex' gap={3} alignItems='center'>
            <InputGroup color='#4a5568'>
              <InputLeftAddon
                pr={0}
                pl={4}
                border={0}
                h={12}
                bg='brand.softDark'
                children={<Search size={22} />}
              />
              <Input
                h={12}
                border={0}
                type='search'
                placeholder='Search Note'
                bg='brand.softDark'
                value={keyword}
                onChange={(e) => handleSearch(e)}
              />
            </InputGroup>
            <AddModal />
          </Box>
        </Box>

        <Tabs variant='soft-rounded' my={2} colorScheme='whiteAlpha'>
          <TabList>
            <Tab>Unarchived</Tab>
            <Tab>Archived</Tab>
          </TabList>
          <TabPanels>
            <TabPanel as='main' padding={0} mt={4}>
              <VStack as='article' gap={3}>
                {unarchivedNotes.length > 0 ? (
                  unarchivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <Box
                    display='flex'
                    alignItems='center'
                    flexDir='column'
                    gap={2}
                    mt={20}>
                    <Bird size={120} />
                    <Heading as='h2' fontSize='2xl' fontWeight={500}>
                      Pretty empty around here
                    </Heading>
                    <Text as='p' fontSize='sm' fontWeight={300} mt={1}>
                      List of unarchived notes is empty
                    </Text>
                  </Box>
                )}
              </VStack>
            </TabPanel>
            <TabPanel as='main' padding={0} mt={4}>
              <VStack as='article' gap={3}>
                {archivedNotes.length > 0 ? (
                  archivedNotes.map((note) => (
                    <NoteCard key={note.id} {...note} />
                  ))
                ) : (
                  <Box
                    display='flex'
                    alignItems='center'
                    flexDir='column'
                    gap={2}
                    mt={20}>
                    <Bird size={120} />
                    <Heading as='h2' fontSize='2xl' fontWeight={500}>
                      Pretty empty around here
                    </Heading>
                    <Text as='p' fontSize='sm' fontWeight={300} mt={1}>
                      List of archived notes is empty
                    </Text>
                  </Box>
                )}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  )
}