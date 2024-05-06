import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import './index.css'
import Editor from "./Pages/Editor.jsx"
import Language from './Pages/Language.jsx'
import Html from "./Pages/html.jsx"
import Css from "./Pages/Css.jsx"
import Js from "./Pages/Js.jsx"
import C from "./Pages/C.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "AboutPage",
    element: <AboutPage/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Editor",
    element: <Editor/>,
  },
  {
    path: "/Language",
    element: <Language />
  },
  {
    path: "/html",
    element: <Html />
  },
  {
    path: "/css",
    element: <Css />
  },
  {
    path: "/js",
    element: <Js />
  },
  {
    path: "/c",
    element: <C />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
  
)
