import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { userContext } from "../src/context"
import { html, css, javascript } from "../data/data"
import Routerlayout from "./layout"
import Home from "./pages/home"
import Login from "./pages/login"
import Sign from "./pages/Sign"
import Html from "./pages/html"
import Css from "./pages/css"
import Js from "./pages/js"

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
        },
        {
          path:"/sign",
          element:<Sign />
        },
        {
          path:"/html",
          element:<Html/>
        },
        {
          path:"/css",
          element:<Css/>
        },
        {
          path:"js",
          element:<Js/>
        }
      ]
    }
  ])

  return (
    <userContext.Provider value={{html,css,javascript}}>
      <RouterProvider router={router} />
    </userContext.Provider>
  )
}

export default App
