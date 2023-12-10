import { createBrowserRouter } from 'react-router-dom'
import { Home, DetailNote, NotFound, AddNote } from '@/pages'
import { RootContainer } from '@/components'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail/:id',
        element: <DetailNote />
      },
      {
        path: '/notes/new',
        element: <AddNote />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
