import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { userContext } from "../src/context"
import Routerlayout from "./layout"
import Home from "./pages/home"
import Login from "./pages/login"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: "/home",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <userContext.Provider value={null}>
      <RouterProvider router={router} />
    </userContext.Provider>
  )
}

export default App
