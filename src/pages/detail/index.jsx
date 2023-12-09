import { useParams } from 'react-router-dom'

export const DetailNote = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>DetailNote</h1>
      <p>id: {id}</p>
    </div>
  )
}
