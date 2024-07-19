import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Sign = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    if (!username || !password) {
      setError('Barcha maydonlarni to\'ldiring')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.username === username && user.password === password)

    if (user) {
      navigate('/home')
    } else {
      setError('Bunday akkaunt yo\'q')
    }
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-[#33333322] py-10 px-16 max-md:px-12 rounded-2xl flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          className="bg-transparent border-b border-gray-500 pl-2 py-1 outline-none text-gray-600"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent border-b border-gray-500 pl-2 py-1 outline-none text-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <p className="text-gray-600">Akkaunt ochish <ins><NavLink to={"/"}>Sign up</NavLink></ins>?</p>
        <button type="submit" className="bg-green-600 text-white py-1 w-full rounded-md">Yuborish</button>
      </form>
    </div>
  )
}

export default Sign
