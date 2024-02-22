import { useState } from 'react'
import {Navigate, Route,Routes} from "react-router-dom"
import { lazy } from 'react'
import LazyLayout from './components/ui/LazyLayout'
import UserLayout from './pages/user/UserLayout'
// import Login from './pages/auth/Login'
// import Register from './pages/auth/Register'
const LazyLogin = lazy(() => import('./pages/auth/Login'))
const LazyRegister = lazy(() => import('./pages/auth/Register'))

const LazyHome = lazy(() => import('./pages/user/Home'))
const LazyAbout = lazy(() => import('./pages/user/About'))

const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
      </Routes>
    </UserLayout>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      {/*<Route path="/login" element={<LazyLogin/>}/>
      <Route path="/register" element={<LazyRegister/>}/>*/}
      
      <Route path="/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/register" element={<LazyLayout component={LazyRegister}/>}/>
      
      {/*}
      <Route path="/user/home" element={<LazyLayout component={LazyHome}/>}/>
      <Route path="/user/about" element={<LazyLayout component={LazyAbout}/>}/>
    */}
      <Route path="/user/*" element={<UserRoutes/>}/>
      <Route path="/user/*" element={<UserRoutes/>}/>
    </Routes>
  )
}

export default App