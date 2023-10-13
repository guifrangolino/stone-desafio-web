import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from './index'

describe('Header', async () => {
  it('Deve renderizar o header', () => {
    render(<Header />)
  })
})