import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function RegisterScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  function validateFields() {
    if (!email) {
      setErrorMessage("Email obrigatório!")
      return undefined
    }
    if (!password) {
      setErrorMessage("Senha obrigatória!")
      return undefined
    }
    if (!confirmPassword) {
      setErrorMessage("Confirmação de senha obrigatória!")
      return undefined
    }
    if (password !== confirmPassword) {
      setErrorMessage("As senhas são incompatíveis!")
      return undefined
    }
    setErrorMessage("")
    return true
  }

  async function registerUser() {
    try {
      const data = {
        email,
        password,
      }
      await api.post('/users', data);
    }catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (validateFields()) {
      await registerUser()
      navigate("/listagem")
    }
  }

  return (
    <div className='container'>
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" value={email} onChange={e =>   setEmail(e.target.value)} />
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <p>{errorMessage}</p>
        <input type='submit' value="Cadastrar"/>
      </form>
      <Link to="/">Já sou usuário</Link>
    </div>
  )
}
