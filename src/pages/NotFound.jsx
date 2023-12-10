import { Link as RouterLink } from 'react-router-dom'
import { Container, Box, Heading, Text, Link } from '@chakra-ui/react'

export const NotFound = () => {
  return (
    <Box bg='brand.dark' color='brand.light'>
      <Container
        as='main'
        maxW='container.sm'
        minH='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDir='column'>
        <Heading as='h1' fontSize='9xl' fontWeight={700}>
          404
        </Heading>
        <Text as='p' fontSize='3xl' fontWeight={700}>
          Page Not Found
        </Text>
        <Link
          to='/'
          as={RouterLink}
          mt={5}
          px={3}
          py={2}
          bg='brand.border'
          rounded='md'
          _hover={{ textDecor: 'none', bg: 'brand.softDark' }}>
          Back to Home
        </Link>
      </Container>
    </Box>
  )
}
