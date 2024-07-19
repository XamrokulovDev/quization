import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExists = users.some(user => user.username === username)

    if (userExists) {
      setError('Foydalanuvchi nomi band')
      return
    }

    const newUser = { username, email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    setUsername('')
    setEmail('')
    setPassword('')
    setError('')
  }

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='backdrop-blur-lg bg-[#33333322] py-10 px-16 rounded-2xl flex flex-col gap-3'>
        <div>
          <input
            type="text"
            id='name'
            placeholder='Username'
            className='outline-none px-2 border-b border-gray-500 bg-transparent text-gray-600'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='bg-green-600 text-white py-1 w-full mt-3 rounded-md'>Yuborish</button>
      </form>
    </div>
  )
}

export default Login
