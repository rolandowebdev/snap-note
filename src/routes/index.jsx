import { createBrowserRouter } from 'react-router-dom'
import { RootContainer } from '@/components'
import { Home, DetailNote } from '@/pages'

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
      }
    ]
  }
])
