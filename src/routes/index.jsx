import { createBrowserRouter } from 'react-router-dom'
import { RootContainer } from '@/components/layouts'
import { DetailNote } from '@/pages/detail'
import { Home } from '@/pages/home'

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
