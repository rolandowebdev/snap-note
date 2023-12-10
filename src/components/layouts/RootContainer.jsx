import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { NotesProvider } from '@/context'

export const RootContainer = () => {
  return (
    <NotesProvider>
      <Box bg='brand.dark' color='brand.light'>
        <Outlet />
      </Box>
    </NotesProvider>
  )
}
