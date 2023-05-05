import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"
import api from '../../services/api'

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  async function login() {
    try {
      const params = {
        email,
        password,
      }
      await api.post('/login', params);
      navigate("/listagem")
    }catch (error) {
      setErrorMessage("Falha de Login")
      console.log(error)
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email && password) {
      await login()
    }
  }

  return (
    <div className='container'>
      <h1>Login de usuário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e =>   setEmail(e.target.value)} />
        <label htmlFor="password" className='senha'>Senha:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <p>{errorMessage}</p>
        <input type='submit' value="Login"/>
      </form>
      <Link to="/cadastro">Criar Conta</Link>
    </div>
  )
}
