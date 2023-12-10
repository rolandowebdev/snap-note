import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'
import { useNotes } from '@/context'

export const SearchNotes = () => {
  const navigate = useNavigate()
  const { onKeywordChange, keyword } = useNotes()

  const handleSearch = (e) => {
    const searchKeyword = e.target.value

    if (!searchKeyword) {
      onKeywordChange('')
      navigate('/')
      return
    }

    onKeywordChange(searchKeyword)
  }

  return (
    <InputGroup color='#4a5568'>
      <InputLeftAddon
        pr={0}
        pl={4}
        border={0}
        h={12}
        bg='brand.softDark'
        children={<Search size={22} />}
      />
      <Input
        h={12}
        border={0}
        type='search'
        fontWeight={600}
        placeholder='Search Note'
        bg='brand.softDark'
        value={keyword}
        onChange={(e) => handleSearch(e)}
      />
    </InputGroup>
  )
}
