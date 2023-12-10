import { Bird } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { Container, Box, Heading, Text, Link } from '@chakra-ui/react'

export const NotFound = () => {
  return (
    <Box bg='brand.dark' color='brand.light'>
      <Container
        as='main'
        maxW='460px'
        minH='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDir='column'>
        <Bird size={200} />
        <Heading as='h1' fontSize='7xl' fontWeight={700}>
          404
        </Heading>
        <Text
          as='p'
          mt={2}
          fontSize='md'
          fontWeight={200}
          textAlign='center'
          lineHeight='1.75rem'>
          Lost in the vast web? Quickly find your way with a click on Back to
          Home guided by our pixel pals. 🏡🐾
        </Text>
        <Link
          to='/'
          mt={4}
          px={3}
          py={2}
          as={RouterLink}
          bg='brand.border'
          rounded='md'
          _hover={{ textDecor: 'none', bg: 'brand.softDark' }}>
          Back to Home
        </Link>
      </Container>
    </Box>
  )
}
