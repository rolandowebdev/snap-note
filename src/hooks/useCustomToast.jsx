import { useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast()

  const showToast = (status, message) => {
    toast({
      position: 'bottom',
      title: message,
      status: status,
      duration: 3000,
      isClosable: true
    })
  }

  return { showToast }
}
