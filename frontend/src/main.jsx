import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/public/Home.jsx'
import Pricing from './pages/public/Pricing.jsx'
import HowitWorks from './pages/public/HowitWorks.jsx'
import Register from './pages/Auth/Register.jsx'
import Authlayout from './layouts/Authlayout.jsx'
import Login from './pages/Auth/Login.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import ProtectedRoutes from './context/ProtectedRoutes.jsx'
import AddProject from './pages/Dashboard/AddProject.jsx'
import DashLayout from './layouts/DashLayout.jsx'
import ProjectDetail from './pages/Dashboard/ProjectDetail.jsx'
import CreateDev from './pages/Auth/CreateDev.jsx'
import ProfilePage from './pages/Dashboard/ProfilePage.jsx'
let isAuthenticated = true;
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"howitworks",
        element:<HowitWorks/>
      },
      {
        path:"pricing",
        element:<Pricing/>
      },
    ]
  },
  {
        path:"dashboard",
        element:(
           <ProtectedRoutes isAuthenticated={isAuthenticated}>
            <DashLayout />
          </ProtectedRoutes>
        ),
        children:[
          {
            path:"",
            element:<Dashboard/>
          },
          {
            path:"addproject",
            element:<AddProject/>
          },
          {
            path:"project/:id",
            element:<ProjectDetail/>, 
          },
          {
           path:"dev",
           element:<CreateDev/> 
          },{
            path:"profile",
            element:<ProfilePage/>
          }
        ]
      },
  {
    
        path:"auth/",
        element:<Authlayout/>,
        children:[
          {
            path:"register",
            element:<Register/>
          },
          {
            path:"login",
            element:<Login/>
          }
        ]
      }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
    />
      </StrictMode>,
)
