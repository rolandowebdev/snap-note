import PropTypes from 'prop-types'
import { Bird } from 'lucide-react'
import { Box, Heading, Text } from '@chakra-ui/react'

export const EmptyNotes = ({ description }) => {
  return (
    <Box display='flex' alignItems='center' flexDir='column' gap={2} mt={16}>
      <Bird size={120} />
      <Heading as='h2' fontSize='xl' fontWeight={500}>
        Pretty empty around here
      </Heading>
      <Text as='p' fontSize='sm' fontWeight={300} mt={1}>
        {description}
      </Text>
    </Box>
  )
}

EmptyNotes.propTypes = {
  description: PropTypes.string.isRequired
}
