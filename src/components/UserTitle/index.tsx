import { ReactNode } from 'react'

import { Title } from '../UserTitle/styles'

interface TitleProps {
  children: ReactNode
}

export function UserTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}
