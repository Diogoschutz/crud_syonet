import { Routes, Route } from 'react-router-dom'

import MainPage from './pages'
import LoginScreenPage from '../src/pages/LoginScreen'
import RegisterScreenPage from '../src/pages/RegisterScreen'
import UserListPage from '../src/pages/UserList'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/' element={<LoginScreenPage />} />
        <Route path='cadastro' element={<RegisterScreenPage />} />
        <Route path='listagem' element={<UserListPage />} />
    </Routes>
  )
}
