import { Navigate, RouteObject } from "react-router-dom";

export const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate replace to="/users/login" />,
  },
]
