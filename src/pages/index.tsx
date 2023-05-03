import { Outlet } from 'react-router-dom'

import { RegisterTitle } from '../components/RegisterTitle'

import { Container } from './styles'



export default function Main() {
  return (
    <Container>
      <RegisterTitle />

      <section>

        <Outlet />
      </section>
    </Container>
  )
}
