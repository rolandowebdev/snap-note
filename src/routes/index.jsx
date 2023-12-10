import { createBrowserRouter } from 'react-router-dom'
import { Home, DetailNote, NotFound } from '@/pages'
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
        path: '/:id',
        element: <DetailNote />,
        errorElement: <NotFound />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
