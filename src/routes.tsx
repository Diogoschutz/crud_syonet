import { Routes, Route } from 'react-router-dom'


import LoginScreen from '../src/pages/Login'
import RegisterScreen from '../src/pages/Register'
import UserListScreen from '../src/pages/UserList'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LoginScreen />} />
      <Route path='/cadastro' element={<RegisterScreen />} />
      <Route path='/listagem' element={<UserListScreen />} />
    </Routes>
  )
}
