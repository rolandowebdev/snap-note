import { useSearchParams } from 'react-router-dom'
import { createContext, useState, useContext } from 'react'
import { listNote } from '@/_data'

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsKeyword = searchParams.get('keyword')

  const [notes, setNotes] = useState(listNote)
  const [keyword, setKeyword] = useState(searchParamsKeyword || '')

  const onKeywordChange = (keyword) => {
    setKeyword(keyword)
    setSearchParams({ keyword: keyword })
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  const archivedNotes = filteredNotes.filter((note) => note.archived)
  const unarchivedNotes = filteredNotes.filter((note) => !note.archived)

  const getNoteById = (id) => {
    return notes.find((note) => note.id === id)
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  const addNote = (title, body) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title: title || '',
        body: body || '',
        createdAt: new Date().toISOString(),
        archived: false
      }
    ])
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        archivedNotes,
        unarchivedNotes,
        setNotes,
        deleteNote,
        addNote,
        getNoteById,
        onKeywordChange,
        keyword
      }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => {
  if (!NotesContext) {
    throw new Error('useNotes must be used within a NotesProvider')
  }

  return useContext(NotesContext)
}
