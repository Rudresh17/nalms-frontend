import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: wire up to auth API once backend exists
    navigate('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-navy to-navy-dark px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl sm:p-8">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-navy">NALMS</div>
          <div className="text-xs text-gray-500">INS Shardul</div>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="w-full bg-accent text-white rounded py-2 text-sm font-medium hover:bg-navy-dark transition-colors"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}
