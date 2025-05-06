import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { userRoutes } from "./user"
import Hello from "../features/sandbox/Hello"

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: 'hello',
      element: <Hello />,
    },
    ...userRoutes
  ])

  return <RouterProvider router={router} />
}
