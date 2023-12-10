import { Box, Text } from '@chakra-ui/react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      as='footer'
      p={4}
      textAlign='center'
      maxW='container.sm'
      marginInline='auto'>
      <Text fontSize='md'>© {year} Snap Note - All rights reserved</Text>
    </Box>
  )
}
