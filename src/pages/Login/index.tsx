import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email && password) {
      navigate("/listagem")
    }
  }

  return (
    <div className='container'>
      <h1>Login de usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" value={email} onChange={e =>   setEmail(e.target.value)} />
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type='submit' value="Login"/>
      </form>
      <Link to="/cadastro">Criar Conta</Link>
    </div>
  )
}
