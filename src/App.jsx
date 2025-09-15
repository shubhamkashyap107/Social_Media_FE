import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import  { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Profile from './Components/Profile';
import Chats from './Components/Chats';
import NewPost from './Components/NewPost';
import EditProfile from './Components/EditProfile';


export const uiContext =  createContext()

const App = () => {
  const[ui, setUi] = useState(0) 
  const[email, setEmail] = useState("")

  return (
    <uiContext.Provider value={{ui, setUi, email, setEmail}}>

    <div>
     <Toaster />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<ProtectedRoutes />} >
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/add' element={<NewPost />} />
          <Route path='/profile/edit' element={<EditProfile />} />
        </Route>
      </Routes>
    </div>

    </uiContext.Provider>

  )
}

export default App