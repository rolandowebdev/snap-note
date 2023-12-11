import { createBrowserRouter } from 'react-router-dom'
import { RootContainer } from '@/components'
import { DetailNote } from '@/pages/DetailNote'
import { NotFound } from '@/pages/NotFound'
import { AddNote } from '@/pages/AddNote'
import { Home } from '@/pages/Home'

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
