import { ReactNode } from 'react'
import { Container } from './style'

interface MainProps {
  children?: ReactNode
}

export function Main({ children }: MainProps) {
  return <Container>{children}</Container>
}