import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Reset error messages
    setError('')
    setUsernameError('')
    setPasswordError('')

    // Validate inputs
    if (!username || !email || !password) {
      setError('Barcha maydonlarni to\'ldiring')
      return
    }

    if (username.length < 5) {
      setUsernameError('Foydalanuvchi nomi 5 ta belgidan kam bo\'lmasin')
      return
    }

    if (password.length < 6) {
      setPasswordError('Parol 6 ta belgidan kam bo\'lmasin')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExists = users.some(user => user.username === username)

    if (userExists) {
      setError('Foydalanuvchi nomi band')
      return
    }

    const newUser = { username, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    // Saqlangan foydalanuvchilarni console.log orqali chiqarish
    console.log(users)

    setUsername('')
    setEmail('')
    setPassword('')
    setError('')
    setUsernameError('')
    setPasswordError('')

    // Home sahifasiga o'tish
    navigate('/home')
  }

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='backdrop-blur-lg bg-[#33333322] py-10 px-12 rounded-2xl flex flex-col gap-3'>
        <div>
          <input
            type="text"
            id='name'
            placeholder='Username'
            className='outline-none px-2 border-b border-gray-500 bg-transparent text-gray-600'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className='text-red-500'>{usernameError}</p>}
        </div>
        <div>
          <input
            type="email"
            id='email'
            placeholder='Email'
            className='outline-none px-2 border-b border-gray-500 bg-transparent text-gray-600'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id='password'
            placeholder='Password'
            className='outline-none px-2 border-b border-gray-500 bg-transparent text-gray-600'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='bg-green-600 text-white py-1 w-full mt-3 rounded-md'>Yuborish</button>
      </form>
    </div>
  )
}

export default Login
