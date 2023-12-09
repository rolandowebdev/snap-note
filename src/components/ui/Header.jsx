import { Box, Heading } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box as='header' py='24px'>
      <Heading as='h1' size='xl' fontWeight='700' textAlign='center'>
        Snap Note
      </Heading>
    </Box>
  )
}
