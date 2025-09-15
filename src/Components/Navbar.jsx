import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const userData = useSelector(store => store.user)

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 cursor-pointer">
        Noisy
      </h3>

      {/* Search Input */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-blue-50 focus:outline-none focus:ring-4 focus:ring-pink-300 placeholder-gray-400 shadow-sm transition"
        />
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <p className="text-gray-800 font-semibold hover:text-pink-600 transition">
          {userData.username}
        </p>
        <div className="relative group">
          <img
            src={
              userData.profilePicture ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="profile"
            className="w-11 h-11 rounded-full ring-2 ring-transparent group-hover:ring-pink-400 transition"
          />
          {/* Online indicator dot */}
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
