import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export const RootContainer = () => {
  return (
    <Box bg='brand.dark' color='brand.light'>
      <Outlet />
    </Box>
  )
}
