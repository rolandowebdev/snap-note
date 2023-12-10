import { createContext, useState, useContext } from 'react'
import { listNote } from '@/_data'

const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(listNote)

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
      value={{ notes, setNotes, deleteNote, addNote, getNoteById }}>
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
