import { createContext, useState, useContext } from 'react'
import { listNote } from '@/_data/notes'

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(listNote)

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
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
