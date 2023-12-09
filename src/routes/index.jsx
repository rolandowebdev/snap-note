import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/home'
import { DetailNote } from '@/pages/detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:id',
    element: <DetailNote />
  }
])
