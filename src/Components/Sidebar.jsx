import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearData } from '../Utils/UserSlice'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const nav = useNavigate()
  const dispatch = useDispatch()

  function logout()
  {
    async function logOut()
    {
        const res = await axios.post(import.meta.env.VITE_DOMAIN + "/api/auth/logout", {}, {withCredentials : true})
        dispatch(clearData())
        nav("/login")
    }
    logOut()
  }

  return (
    <div
      className={
        "h-[94vh] bg-white shadow-md flex flex-col p-6 space-y-6 transition-all duration-300 " +
        (showSidebar ? "w-64" : "w-20")
      }
    >
      {/* Toggle Button */}
      <i
        onClick={() => setShowSidebar(!showSidebar)}
        className="fa-solid fa-bars text-gray-600 cursor-pointer text-lg"
      ></i>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
        <Link
          to="/"
          className="flex items-center gap-3 hover:bg-blue-100 px-3 py-2 rounded-md transition"
        >
          <i className="fa-regular fa-house"></i>
          {showSidebar && <span>Home</span>}
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 hover:bg-blue-100 px-3 py-2 rounded-md transition"
        >
          <i className="fa-solid fa-user"></i>
          {showSidebar && <span>Profile</span>}
        </Link>

        <Link
          to="/chats"
          className="flex items-center gap-3 hover:bg-blue-100 px-3 py-2 rounded-md transition"
        >
          <i className="fa-solid fa-comments"></i>
          {showSidebar && <span>Chats</span>}
        </Link>

        <Link
          to="/add"
          className="flex items-center gap-3 hover:bg-blue-100 px-3 py-2 rounded-md transition"
        >
          <i className="fa-solid fa-plus"></i>
          {showSidebar && <span>Add New Post</span>}
        </Link>
      </nav>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Logout Button */}
      {showSidebar && <button onClick={logout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition">
        Logout
      </button>}
    </div>
  )
}

export default Sidebar
