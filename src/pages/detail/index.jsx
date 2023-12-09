import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

export const DetailNote = () => {
  const { id } = useParams()

  return (
    <Container maxW='container.md' minH='100vh'>
      <h1>DetailNote</h1>
      <p>id: {id}</p>
    </Container>
  )
}
